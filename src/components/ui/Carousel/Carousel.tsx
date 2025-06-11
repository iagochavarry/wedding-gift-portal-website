import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const Carousel = ({
  images,
  alt,
  autoPlay = true,
  autoPlayInterval = 5000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length, goToNext]);

  if (images.length === 0) return null;

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className={styles.image}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={`${styles.navButton} ${styles.prevButton}`}
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className={`${styles.navButton} ${styles.nextButton}`}
              aria-label="Próxima foto"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              aria-label={`Ir para foto ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
