import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import { EffectCube, Pagination } from 'swiper/modules';

const SwiperCube: React.FC = () => {
  return (
    <div className="swiper-container">
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://zznqketqz3cgxck6.public.blob.vercel-storage.com/cubeImages/cube1-RZnEnfuQ213WLkFc9AkhlP1WKfs8GL.jpg"
            alt="Nature 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zznqketqz3cgxck6.public.blob.vercel-storage.com/cubeImages/cube2-m7HvFF6cPn12EZzHkTG2lI3PQqOfty.jpg"
            alt="Nature 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zznqketqz3cgxck6.public.blob.vercel-storage.com/cubeImages/cube3-87Ok0XYxt9IaLEOuzJdlBxREKlawzB.jpg"
            alt="Nature 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zznqketqz3cgxck6.public.blob.vercel-storage.com/cubeImages/cube4-JetLl6JTUBzhUDq8YQbCM6iYd26S8I.jpg"
            alt="Nature 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCube;
