import React from 'react';
import { getAllUsers } from '@/services/User';
import AdminAllUsersTable from './AdminAllUsersTable';

const AdminAllUsersModule = async () => {
  const users = await getAllUsers();

  return (
    <div>
      <AdminAllUsersTable data={users?.data} />
    </div>
  );
};

export default AdminAllUsersModule;
