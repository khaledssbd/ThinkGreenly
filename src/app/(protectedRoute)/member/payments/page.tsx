import MemberPaymentsModule from '@/components/modules/Payments/MemberPaymentsModule';
import { LoaderCircle } from 'lucide-react';
import React, { Suspense } from 'react';

const MemberPaymentsPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex size-full min-h-dvh items-center justify-center">
          <LoaderCircle className="animate-spin transition-all duration-300 ease-in-out" />
        </div>
      }
    >
      <MemberPaymentsModule />
    </Suspense>
  );
};

export default MemberPaymentsPage;
