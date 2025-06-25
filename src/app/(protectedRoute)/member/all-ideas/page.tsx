import MemberAllIdeasModule from '@/components/modules/Ideas/MemberAllIdeas/MemberAllIdeasModule';
import { LoaderCircle } from 'lucide-react';
import React, { Suspense } from 'react';

const AllIdeasPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex size-full min-h-dvh items-center justify-center">
          <LoaderCircle className="animate-spin transition-all duration-300 ease-in-out" />
        </div>
      }
    >
      <MemberAllIdeasModule />
    </Suspense>
  );
};

export default AllIdeasPage;
