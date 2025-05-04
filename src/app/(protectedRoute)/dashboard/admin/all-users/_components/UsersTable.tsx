import React from 'react'
import { UserDataTable } from './data-table';
import { TUser } from '@/types';

const UsersTable = ({ data }: { data: TUser[] }) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      
      <div className="overflow-x-auto">
        <UserDataTable data={data} />
      </div>
    </div>
  );
}

export default UsersTable
