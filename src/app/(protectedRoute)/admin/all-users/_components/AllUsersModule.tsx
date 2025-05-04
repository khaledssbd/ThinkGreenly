import React from 'react'
import { getAllUsers } from '../_actions'
// import { dummyUsers } from '../_data/data';
import UsersTable from './UsersTable';

const AllUsersModule = async () => {
    const users = await getAllUsers();
    // const data = users.length < 0 ? users : dummyUsers
  return (
    <div>
      <UsersTable data={users?.data}/>
    </div>
  )
}

export default AllUsersModule
