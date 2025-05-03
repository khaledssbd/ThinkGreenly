'use client';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import 'swiper/css';
import { Idea } from '@/types/idea';

const IdeaCardCarousel = ({ idea }: { idea: Idea }) => {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {idea?.images?.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={image}
              width={500}
              height={500}
              alt="idea image"
              className="rounded-sm h-48 object-cover"
            />
          </SwiperSlide>

          // <SwiperSlide key={idx} className="aspect-[16/9]">
          //   <Image
          //     src={image}
          //     fill
          //     alt="idea image"
          //     className="rounded-sm h-48 object-cover"
          //   />
          // </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IdeaCardCarousel;
