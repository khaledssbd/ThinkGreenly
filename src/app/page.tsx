"use client";
import React from "react";

import { Banner } from "../components/HomeComponents/Banner";
// import { getCurrentUser } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
const HomePage = () => {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <Banner />
    </div>
  );
};

export default HomePage;
