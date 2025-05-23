import React from 'react';

import { Banner } from '@/components/HomeComponents/Banner';
import IdeaHome from '@/components/HomeComponents/IdeaHome';
import TestimonialSection from '@/components/HomeComponents/TestimonialSection';
import WorkingSolutins from '@/components/HomeComponents/WorkingSolutins';
import OurSkillsSection from '@/components/HomeComponents/OurSkillsSection';
import HeroSection from '@/components/HomeComponents/HeroSection';

// import NavBar from "@/components/Basics/NavBar";

const HomePage = async () => {
  return (
    <div className="w-full">
      {/* <Banner /> */}

      <HeroSection/>

      <IdeaHome />

      <OurSkillsSection />

      <WorkingSolutins />

      <TestimonialSection />
    </div>
  );
};

export default HomePage;
