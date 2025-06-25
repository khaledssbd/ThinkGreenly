import { AdminDataTable } from './AdminDataTable';
import { TIdea } from '@/types';

const AdminIdeasTable = ({ data }: { data: TIdea[] }) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All Ideas ({data.length})
      </h1>
      <div className="overflow-x-auto">
        <AdminDataTable data={data} />
      </div>
    </div>
  );
};

export default AdminIdeasTable;
