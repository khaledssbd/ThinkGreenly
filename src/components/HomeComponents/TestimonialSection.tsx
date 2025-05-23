import {

  CardContent,
  CardFooter,
  CardTitle,
} from '../ui/card';
import Image from 'next/image';
import { getByVotes } from '@/services/Idea';
import { Badge } from '../ui/badge';
import u1 from '../../assets/u1.avif';
import { Lightbulb } from 'lucide-react';

const TestimonialSection = async () => {
  const { data: testimonials } = await getByVotes();

  return (
    <section className="py-16 px-4 text-center my-20 relative rounded-2xl overflow-hidden bg-gradient-to-b from-green-50/50 to-white dark:from-emerald-900/20 dark:to-zinc-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        <span className="bg-gradient-to-r from-green-600 to-emerald-700 dark:from-emerald-300 dark:to-green-400 text-transparent bg-clip-text">
          Top Voted Innovations
        </span>
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mx-auto mb-10 max-w-2xl text-lg">
        Community-driven solutions shaping a sustainable future
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials?.slice(0, 3).map((idea: any, idx: number) => (
          <div 
            key={idx}
            className="group relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-green-100/50 dark:border-emerald-900/50 hover:border-green-300 dark:hover:border-emerald-500"
          >
            {/* Floating Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              <span>#{idx + 1} Most Voted</span>
            </div>

            <CardContent className="space-y-6 pt-12 pb-6 px-6">
              {/* Category */}
              <div className="flex justify-center">
                <Badge variant="outline" className="bg-white/80 dark:bg-zinc-800 border-green-200 dark:border-emerald-800 px-4 py-2 rounded-full text-sm">
                  {idea.category?.name}
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white px-4 border-b-2 border-green-100 dark:border-emerald-900 pb-4">
                {idea.title}
              </h3>

              {/* Description */}
              <div className="relative h-20 overflow-hidden">
                <p className="text-gray-600 dark:text-gray-300 text-left text-sm leading-relaxed">
                  {idea.description}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent" />
              </div>


              <div className="grid grid-cols-3 gap-2 transform group-hover:scale-105 transition-transform">
                {idea.images?.map((img: any, index: number) => (
                  <div 
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg border-2 border-green-50 dark:border-emerald-900"
                  >
                    <Image
                      src={img}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="object-cover transition-opacity hover:opacity-90"
                    />
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Author Section */}
            <CardFooter className="bg-green-50/50 dark:bg-emerald-900/20 px-6 py-4 border-t-2 border-green-100 dark:border-emerald-900">
              <div className="flex items-center gap-4 w-full">
                <div className="relative">
                  <Image
                    src={idea.author.image || u1}
                    width={48}
                    height={48}
                    alt="avatar"
                    className="rounded-full border-2 border-green-200 dark:border-emerald-800"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {idea.votes}★
                  </span>
                </div>
                <div className="text-left">
                  <CardTitle className="text-sm font-semibold text-gray-900 dark:text-white">
                    {idea.author?.name}
                  </CardTitle>
                  <p className="text-xs text-gray-500 dark:text-emerald-300">
                    Sustainability Champion
                  </p>
                </div>
              </div>
            </CardFooter>


            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-emerald-400 rounded-full blur-xl animate-pulse delay-75" />
            </div>
          </div>
        ))}
      </div>

 
      <div className="absolute top-20 left-10 w-24 h-24 bg-green-200/30 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl -z-10" />
    </section>
  );
};

export default TestimonialSection;
