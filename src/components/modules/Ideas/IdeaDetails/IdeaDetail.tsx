'use client';

import {
  Leaf,
  DollarSign,
  ShieldCheck,
  MessageCircle,
  Heart,
  HeartOff,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Comment, Idea } from '@/types/idea';
import { useRef, useState } from 'react';
import { useUser } from '@/context/UserContext';
import { createComment, createVote, deleteVote } from '@/services/Idea';
import { toast } from 'sonner';

interface CommentListProps {
  comment: Comment;
  onReply: (content: string, parentId: string) => void;
}
interface CommentFormProps {
  onSubmit: (content: string, parentId?: string) => void;
  onCancel?: () => void;
  parentId?: string;
}

const IdeaDetail = ({ idea }: { idea: Idea }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [comments, setComments] = useState<Comment[]>(idea.comments || []);
  const { user } = useUser();
  const handleVote = async (direction: 'UP' | 'DOWN') => {
    const payload = {
      ideaId: idea.id,
      type: direction,
    };
    const res = await createVote(payload);
    if (res.success) {
      toast.success('Thanks for your vote');
    }
  };
  const handleDelete = async (id: string) => {
    const res = await deleteVote(id);
    if (res.success) {
      toast.success('Your vote is removed');
    }
  };
  const handleAddComment = async (content: string, parentId?: string) => {
    try {
      const payload = {
        content,
        ideaId: idea.id,
        ...(parentId ? { parentId } : {}),
      };
      const response = await createComment(payload);

      console.log('Comment : ', response);

      setComments(prev => {
        if (parentId) {
          return (
            prev?.map(comment =>
              comment?.id === parentId
                ? {
                    ...comment,
                    replies: [...(comment?.replies || []), response.data],
                  }
                : comment
            ) || []
          );
        }
        return [response.data, ...(prev || [])];
      });
    } catch (error) {
      console.error('Failed to post comment:', error);
    }
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      <div className="rounded-3xl shadow-xl overflow-hidden">
        <div className="relative h-96 bg-gray-100">
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {idea.images.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative h-96 w-full">
                    <Image
                      src={img}
                      fill
                      alt={`Slide ${idx + 1}`}
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <div className="absolute bottom-4 right-4  flex items-center gap-2 ">
            <div className="flex bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm items-center gap-2">
              <Leaf className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-700">
                {idea.category?.name}
              </span>
            </div>
            <div className="flex bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">
                {idea.comments?.length || 0}
              </span>
            </div>

            <div className="flex bg-white/90 backdrop-blur-sm px-4 py-2 text-green-700 rounded-full shadow-sm items-center gap-2">
              <Heart className="w-4 h-4 text-green-900" />
              <span className="text-sm font-medium">
                {idea.votes?.filter(vote => vote.type === 'UP').length || 0}
              </span>
            </div>
            <div className="flex bg-white/90 backdrop-blur-sm px-4 py-2 text-red-700 rounded-full shadow-sm items-center gap-2">
              <HeartOff className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium">
                {idea.votes?.filter(vote => vote.type === 'DOWN').length || 0}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12 grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-green-200">
                {idea.title}
              </h1>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {/* Problem Section */}
              <div className="p-6 bg-green-50 rounded-xl dark:bg-transparent border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-7 h-7 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-green-400">
                    The Challenge
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed dark:text-white text-lg">
                  {idea.problemStatement}
                </p>
              </div>

              {/* Solution Section */}
              <div className="p-6 bg-green-50 dark:bg-transparent  rounded-xl border border-green-100 ">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-7 h-7 text-green-600 " />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-green-400">
                    Proposed Solution
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed dark:text-white text-lg">
                  {idea.solution}
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border dark:bg-transparent border-green-100">
                <h3 className="text-xl font-bold dark:text-green-400 text-gray-900 mb-4">
                  Detailed Implementation
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  {idea.description}
                </p>
              </div>
              <div className="mb-8">
                <CommentForm onSubmit={content => handleAddComment(content)} />
              </div>

              <div className="space-y-6">
                {comments.filter(c => !c.parentId).length === 0 ? (
                  <p className="text-gray-500 text-center py-4">
                    No comments yet. Be the first to share your thoughts!
                  </p>
                ) : (
                  comments
                    .filter(c => !c.parentId)
                    .map(comment => (
                      <CommentList
                        key={comment.id}
                        comment={comment}
                        onReply={handleAddComment}
                      />
                    ))
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-xl border dark:bg-transparent border-green-200">
              <div className="flex items-center justify-center gap-2">
                {/* Upvote button */}
                <button
                  onClick={() => {
                    const existingVote = idea.votes?.find(
                      p =>
                        p.ideaId === idea.id &&
                        p.userEmail === user?.email &&
                        p.type === 'UP'
                    );

                    if (existingVote) {
                      // If vote exists, delete it
                      handleDelete(idea.id);
                    } else {
                      // If no vote exists, create UP vote
                      handleVote('UP');
                    }
                  }}
                  className={`p-2 rounded-md transition-colors ${
                    idea.votes?.some(
                      p =>
                        p.ideaId === idea.id &&
                        p.userEmail === user?.email &&
                        p.type === 'UP'
                    )
                      ? 'bg-green-100'
                      : 'text-gray-600 hover:bg-green-100'
                  }`}
                >
                  <Heart className="w-8 h-8 text-green-600" />
                </button>

                {/* Downvote button */}
                <button
                  onClick={() => {
                    const existingVote = idea.votes?.find(
                      p =>
                        p.ideaId === idea.id &&
                        p.userEmail === user?.email &&
                        p.type === 'DOWN'
                    );

                    if (existingVote) {
                      // If downvote exists, delete it
                      handleDelete(idea.id);
                    } else {
                      // If no downvote exists, create DOWN vote
                      handleVote('DOWN');
                    }
                  }}
                  className={`p-2 rounded-md transition-colors ${
                    idea.votes?.some(
                      p =>
                        p.ideaId === idea.id &&
                        p.userEmail === user?.email &&
                        p.type === 'DOWN'
                    )
                      ? 'bg-red-100'
                      : 'text-gray-600 hover:bg-red-100'
                  }`}
                >
                  <HeartOff className="w-8 h-8 text-red-600" />
                </button>
              </div>
            </div>
            {idea.isPaid ? (
              <div className="bg-green-50 p-6 rounded-xl border dark:bg-transparent border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-300">
                    Premium Solution
                  </h3>
                </div>

                <div className="text-center p-4 bg-green-100 dark:bg-transparent  rounded-lg">
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    ✅ Full Access Granted
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-green-50 dark:bg-transparent p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-300">
                    Community Solution
                  </h3>
                </div>
                <div className="text-center p-4 bg-green-100 dark:bg-transparent rounded-lg">
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    🌱 Open Access - Collaborate & Contribute!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetail;

const CommentList = ({ comment, onReply }: CommentListProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const userName = comment.user?.name || 'Anonymous';
  return (
    <div className="ml-4 mt-4 border-l-2 border-green-100 pl-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center overflow-hidden">
          {comment.user?.image ? (
            <Image
              src={comment.user?.image}
              alt={userName}
              fill
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            userName[0].toUpperCase()
          )}
        </div>
        <div className="flex-grow">
          <div className="text-sm font-medium text-gray-900 dark:text-green-400">
            {userName}
          </div>
          <div className="text-sm text-gray-600 dark:text-white mt-1">
            {comment.content}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => setIsReplying(!isReplying)}
              className="text-sm text-green-600 hover:text-green-700"
            >
              Reply
            </button>
            <span className="text-sm text-gray-400">
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
          </div>
          {isReplying && (
            <div className="mt-3">
              <CommentForm
                onSubmit={content => {
                  onReply(content, comment.id);
                  setIsReplying(false);
                }}
                onCancel={() => setIsReplying(false)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Nested Replies */}
      {comment.replies?.map(reply => (
        <CommentList key={reply.id} comment={reply} onReply={onReply} />
      ))}
    </div>
  );
};

const CommentForm = ({ onSubmit, onCancel, parentId }: CommentFormProps) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSubmit(content, parentId || undefined);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
        placeholder="Write your comment..."
        rows={3}
        required
      />
      <div className="mt-2 flex justify-end gap-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};
