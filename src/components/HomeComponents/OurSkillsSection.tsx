'use client';

import Image from 'next/image';
import skill from '../../assets/skill-thumb.png';
import { Leaf } from 'lucide-react';
import { Progress } from '../ui/progress';

const OurSkillsSection = () => {
  return (
    <div className="bg-[#F6F6EE] relative py-16 rounded-2xl dark:bg-black flex flex-col-reverse md:flex-row-reverse justify-around items-center my-26 px-2 md:px-10 gap-5">
       <div className="absolute -top-12 -right-12 w-24 h-24 bg-green-400/10 rounded-full blur-xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-300/10 rounded-full blur-xl" />
      <div className="space-y-4 ">
        <p className="dark:text-green-300 font-bold text-black flex gap-2">
          Our SKills <Leaf />
        </p>
        <div className="text-3xl dark:text-green-600 text-black font-bold">
          Getting A Greener Future <br />
          Safe Environment
        </div>
        <div className="dark:text-gray-400  font-bold text-black">
          Competently cultivate worldwide e-tailers through principle-centered
          value <br /> professionally engineer high-payoff deliverables without
          exceptional <br />
          processes. Rapidiously network cost effective vortals
        </div>
        <div>
          <p className="text-xl dark:text-gray-200 my-2">Recycling</p>
          <Progress value={77} />
          <p className="text-xl dark:text-gray-200 mt-4  mb-2">
            Ocean Cleaning{' '}
          </p>
          <Progress value={88} />
        </div>
      </div>
      <div className=' '>
      <div className='max-w-[400px] '>
        <Image src={skill} height={500} width={500} alt="skill" className='w-full h-full'/>
      </div>
      </div>
    </div>
  );
};

export default OurSkillsSection;
