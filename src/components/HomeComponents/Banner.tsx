'use client';

import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  // CarouselNext,
  // CarouselPrevious,
} from '@/components/ui/carousel';
import onepic from '@/assets/greenWorld.jpg';
import twopic from '@/assets/begreen.jpg';
import Image from 'next/image';
import { useRef } from 'react';

export function Banner() {
  const images = [onepic, twopic];
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className=" mx-auto my-12 flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              width={2400}
              height={1000}
              alt="images"
              className='object-cover w-full'
            />
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
