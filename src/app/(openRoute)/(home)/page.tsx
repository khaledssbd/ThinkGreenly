import React from "react";

import { Banner } from "@/components/HomeComponents/Banner";
import IdeaHome from "@/components/HomeComponents/IdeaHome";
import TestimonialSection from "@/components/HomeComponents/TestimonialSection";
import WorkingSolutins from "@/components/HomeComponents/WorkingSolutins";

// import NavBar from "@/components/Basics/NavBar";

const HomePage = async () => {
  return (
    <div>
      <Banner />
      <IdeaHome />
      <WorkingSolutins />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
