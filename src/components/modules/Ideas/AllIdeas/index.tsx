import { Idea } from '@/types/idea';
import FilterSidebar from '../FilterSidebar';
import IdeaCard from '../IdeaCard';

const AllIdeas = ({ ideas }: { ideas: Idea[] }) => {
  return (
    <div className="flex flex-col gap-3 my-10">
      <FilterSidebar />

      <div className="mx-4 lg:my-10 md:mx-0">
        {ideas?.length === 0 ? (
          <h3 className="text-xl font-bold text-center">No Idea found</h3>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-7 md:space-y-7  mx-auto">
            {ideas?.map((idea: Idea, idx: number) => (
              <IdeaCard key={idx} idea={idea} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllIdeas;
