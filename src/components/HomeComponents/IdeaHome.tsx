import { getAllIdeas } from '@/services/Idea';
import IdeaHomeCards from './IdeaHomeCards';

const IdeaHome = async () => {
  const { data: ideas } = await getAllIdeas();
  console.log('ideas', ideas);
  return (
    <div>
      <section className="text-center py-12 px-4">
        <h2 className="text-4xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Featured Sustainability Ideas
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-300">
          Discover community-powered projects tackling real-world environmental
          problems — from solar panels to urban gardens and everything in
          between.
        </p>
      </section>
      <div className="max-w-[1250px] mx-auto flex gap-10">
        {ideas.map((idea: any, idx: number) => (
          <IdeaHomeCards key={idx} idea={idea}></IdeaHomeCards>
        ))}
      </div>
    </div>
  );
};

export default IdeaHome;
