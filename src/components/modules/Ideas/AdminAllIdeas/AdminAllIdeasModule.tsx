import { getAllIdeasByAdmin } from '@/services/Idea';
import AdminIdeasTable from './AdminIdeasTable';

const AdminAllIdeasModule = async () => {
  const ideas = await getAllIdeasByAdmin();

  return (
    <div>
      <AdminIdeasTable data={ideas?.data} />
    </div>
  );
};

export default AdminAllIdeasModule;
