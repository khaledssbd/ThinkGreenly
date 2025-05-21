'use client';

import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useRef } from 'react';
import { Idea } from '@/types/idea';

const IdeaCardCarousel = ({ idea }: { idea: Idea }) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="w-full h-full mx-auto my-12 flex justify-center mb-auto ">
      <Carousel
        plugins={[plugin.current]} 
        className="w-full max-w-7xl  "
        id='ideas-carousel'
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className='rounded-lg!'>
          {idea.images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              width={600}
              height={300}
              alt="images"
              className='h-[200px] md:h-[220px] w-full rounded-lg object-cover'
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default IdeaCardCarousel;
