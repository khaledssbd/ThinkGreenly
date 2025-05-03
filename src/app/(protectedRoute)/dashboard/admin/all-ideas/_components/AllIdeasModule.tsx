import React from "react";
import { getAllIdeas } from "../_actions";
import IdeasTable from "./IdeasTable";
// import { dummyIdeas } from "../_data";

const AllIdeasModule = async () => {
  const ideas = await getAllIdeas();
  console.log(ideas, "all ideas:");

  // const data = ideas?.data?.length < 0 ? ideas?.data : dummyIdeas;
  return (
    <div>
      <IdeasTable data={ideas?.data} />
    </div>
  );
};

export default AllIdeasModule;
