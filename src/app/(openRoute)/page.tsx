import React from "react";
import { getCurrentUser } from "@/services/AuthService";
import { Banner } from "@/components/HomeComponents/Banner";


const HomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <div>
      <Banner />
    </div>
  );
};

export default HomePage;
