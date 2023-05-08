import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

export default function ImageCarousel({ data }) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.url} alt={item.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
