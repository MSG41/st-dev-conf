import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// I imported all the css bundle in styles. It's working.
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
          <img src="/cubeImages/cube1.jpg" alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cubeImages/cube2.jpg" alt="Nature 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cubeImages/cube3.jpg" alt="Nature 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cubeImages/cube4.jpg" alt="Nature 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCube;