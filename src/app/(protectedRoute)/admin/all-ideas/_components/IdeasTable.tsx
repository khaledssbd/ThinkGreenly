import { DataTable } from './data-table';
import { TIdea } from '@/types';

const IdeasTable = ({ data }: { data: TIdea[] }) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All Ideas ({data.length})
      </h1>
      <div className="overflow-x-auto">
        <DataTable data={data} />
      </div>
    </div>
  );
};

export default IdeasTable;
