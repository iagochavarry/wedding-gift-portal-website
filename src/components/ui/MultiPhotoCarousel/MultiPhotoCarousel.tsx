import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './MultiPhotoCarousel.module.css';

interface MultiPhotoCarouselProps {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  visiblePhotos?: number;
}

export const MultiPhotoCarousel = ({
  images,
  alt,
  autoPlay = true,
  autoPlayInterval = 3000,
  visiblePhotos = 5,
}: MultiPhotoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const carouselRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, images.length - visiblePhotos);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return maxIndex;
      }
      return prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  useEffect(() => {
    if (!isAutoPlaying || images.length <= visiblePhotos) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, images.length, visiblePhotos, maxIndex]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(autoPlay);
  };

  if (images.length === 0) return null;

  const photoWidth = 100 / visiblePhotos;
  const translateX = -currentIndex * photoWidth;

  const startPhoto = currentIndex + 1;
  const endPhoto = Math.min(currentIndex + visiblePhotos, images.length);

  return (
    <>
      {/* Images Container - Separate from progress bar */}
      <div
        className={styles['carouselContainer']}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={carouselRef}
      >
        <div
          className={styles['photosContainer']}
          style={{
            transform: `translateX(${translateX}%)`,
            width: '100%',
          }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles['photoItem']} style={{ width: `${photoWidth}%` }}>
              <img src={image} alt={`${alt} ${index + 1}`} className={styles['photo']} />
            </div>
          ))}
        </div>

        {/* Fade overlays */}
        <div className={styles['fadeLeft']} />
        <div className={styles['fadeRight']} />

        {/* Navigation buttons - sempre habilitados para comportamento circular */}
        {images.length > visiblePhotos && (
          <>
            <button
              onClick={goToPrevious}
              className={`${styles['navButton']} ${styles['prevButton']}`}
              aria-label="Fotos anteriores"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className={`${styles['navButton']} ${styles['nextButton']}`}
              aria-label="Próximas fotos"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Progress indicator - Completely separate */}
      {images.length > visiblePhotos && (
        <div className={styles['progressContainer']}>
          <div className={styles['progressBar']}>
            <div
              className={styles['progressFill']}
              style={{
                width: `${((currentIndex + visiblePhotos) / images.length) * 100}%`,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
