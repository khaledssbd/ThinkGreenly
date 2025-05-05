import React from 'react';
import { getMemberOwnIdeas } from '../_actions';
import IdeasTable from './IdeasTable';
// import { dummyIdeas } from '../_data';

const AllIdeasModule = async () => {
  const { data: ideas } = await getMemberOwnIdeas();
  console.log(ideas)

  return (
    <div>
      <IdeasTable ideas={ideas} />
    </div>
  );
};

export default AllIdeasModule;
