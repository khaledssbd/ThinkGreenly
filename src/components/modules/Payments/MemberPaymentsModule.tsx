import { getMemberPayments } from '@/services/Payment';
import React from 'react';
import { MemberPaymentsDataTable } from './MemberPaymentsDataTable';

const MemberPaymentsModule = async () => {
  const { data: payments } = await getMemberPayments();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All Payments ({payments?.length})
      </h1>

      <div className="overflow-x-auto">
        <MemberPaymentsDataTable data={payments} />
      </div>
    </div>
  );
};

export default MemberPaymentsModule;
