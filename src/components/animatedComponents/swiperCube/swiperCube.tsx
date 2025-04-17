import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import { EffectCube, Pagination } from 'swiper/modules';

interface ImageData {
  src: string;
  alt: string;
}

interface SwiperCubeProps {
  images: ImageData[];
}

const SwiperCube: React.FC<SwiperCubeProps> = ({ images }) => {
  return (
    <div
      className="swiper-container"
      style={{ maxWidth: '500px', margin: '0 auto' }}
    >
      <Swiper
        effect={'cube'}
        grabCursor={true}
        loop={true}
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="image-container">
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  aspectRatio: '4/3',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCube;
