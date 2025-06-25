import React from 'react';
import { AdminAllUsersDataTable } from './AdminAllUsersDataTable';
import { TUser } from '@/types';

const AdminAllUsersTable = ({ data }: { data: TUser[] }) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All Users ({data.length})
      </h1>

      <div className="overflow-x-auto">
        <AdminAllUsersDataTable data={data} />
      </div>
    </div>
  );
};

export default AdminAllUsersTable;
