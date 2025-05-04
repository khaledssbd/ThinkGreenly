import React from 'react';
import { getMemberOwnIdeas } from '../_actions';
import IdeasTable from './IdeasTable';
import { dummyIdeas } from '../_data';

const AllIdeasModule = async () => {
  const ideas = await getMemberOwnIdeas();

  const data = ideas.length > 0 ? ideas : dummyIdeas;
  return (
    <div>
      <IdeasTable data={data} />
    </div>
  );
};

export default AllIdeasModule;
