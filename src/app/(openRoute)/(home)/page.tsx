import React from 'react';

import { Banner } from '@/components/HomeComponents/Banner';
import IdeaHome from '@/components/HomeComponents/IdeaHome';
import TestimonialSection from '@/components/HomeComponents/TestimonialSection';
import WorkingSolutins from '@/components/HomeComponents/WorkingSolutins';
import OurSkillsSection from '@/components/HomeComponents/OurSkillsSection';
import HeroSection from '@/components/HomeComponents/HeroSection';
import { Newsletter } from '@/components/HomeComponents/Newsletter';

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
      
      <Newsletter/>
    </div>
  );
};

export default HomePage;
