import AdminAllUsersModule from '@/components/modules/User/AdminAllUsersModule';
import { LoaderCircle } from 'lucide-react';
import { Suspense } from 'react';

const AdminAllUsersPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex size-full min-h-dvh items-center justify-center">
          <LoaderCircle className="animate-spin transition-all duration-300 ease-in-out" />
        </div>
      }
    >
      <AdminAllUsersModule />
    </Suspense>
  );
};

export default AdminAllUsersPage;
