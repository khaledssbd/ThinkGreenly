import AdminPaymentsModule from '@/components/modules/Payments/AdminPaymentsModule';
import { LoaderCircle } from 'lucide-react';
import { Suspense } from 'react';

const CreateIdeaPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex size-full min-h-dvh items-center justify-center">
          <LoaderCircle className="animate-spin transition-all duration-300 ease-in-out" />
        </div>
      }
    >
      <AdminPaymentsModule />
    </Suspense>
  );
};

export default CreateIdeaPage;
