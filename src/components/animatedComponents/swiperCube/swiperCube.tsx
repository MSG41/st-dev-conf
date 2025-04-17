import React, { useState, useRef } from 'react';
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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwiping = useRef(false);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;

    if (Math.abs(touchEndX.current - touchStartX.current) > 20) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;

    const swipeThreshold = 100;
    const difference = touchEndX.current - touchStartX.current;

    if (difference > swipeThreshold) {
      e.preventDefault();
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (difference < -swipeThreshold) {
      e.preventDefault();
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
    isSwiping.current = false;
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
                  onClick={() => openModal(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {modalOpen && images[selectedImageIndex] && (
        <div
          className="image-modal-overlay"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-button" onClick={closeModal}>
              ×
            </button>
            <button
              className="modal-nav-button modal-prev-button"
              onClick={goToPrevImage}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="modal-nav-button modal-next-button"
              onClick={goToNextImage}
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              className="modal-image"
            />
            <p className="modal-caption">{images[selectedImageIndex].alt}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SwiperCube;
