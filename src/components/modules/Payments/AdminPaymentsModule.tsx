import { getAllPayments } from '@/services/Payment';
import React from 'react';
import { AdminPaymentsDataTable } from './AdminPaymentsDataTable';

const AdminPaymentsModule = async () => {
  const { data: payments } = await getAllPayments();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All Payments ({payments.length})
      </h1>

      <div className="overflow-x-auto">
        <AdminPaymentsDataTable data={payments} />
      </div>
    </div>
  );
};

export default AdminPaymentsModule;
