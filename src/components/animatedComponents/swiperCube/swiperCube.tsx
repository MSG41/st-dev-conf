import React, { useState } from 'react';
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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div
        className="swiper-container"
        style={{ maxWidth: '350px', margin: '0 auto' }}
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
                    cursor: 'pointer',
                  }}
                  onClick={() => openModal(image)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {modalOpen && selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-button" onClick={closeModal}>
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
            <p className="modal-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SwiperCube;
