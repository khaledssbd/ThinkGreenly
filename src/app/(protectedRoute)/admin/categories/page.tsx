import AdminAllCategoriesModule from '@/components/modules/Category/AdminAllCategoriesModule';
import { LoaderCircle } from 'lucide-react';
import { Suspense } from 'react';

const AdminAllCategoriesPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex size-full min-h-dvh items-center justify-center">
          <LoaderCircle className="animate-spin transition-all duration-300 ease-in-out" />
        </div>
      }
    >
      <AdminAllCategoriesModule />
    </Suspense>
  );
};

export default AdminAllCategoriesPage;
