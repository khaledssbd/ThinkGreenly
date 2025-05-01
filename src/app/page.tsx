import React from "react";
import { Banner } from "../components/HomeComponents/Banner";
import { getCurrentUser } from "@/services/AuthService";
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
