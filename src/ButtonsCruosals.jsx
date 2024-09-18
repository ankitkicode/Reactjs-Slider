// Import React and hooks
import React, { useState, useEffect, useRef } from 'react';

// Import custom styles
import './ButtonCruosals.css';

// Define the CarouselComponent
const CarouselComponent = () => {
  // State for current slide index
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Slides data (with cloning)
  const slides = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    // Add more slides as needed
  ];

  // Ref to access the slides container
  const slidesRef = useRef(null);

  // Handle transition end to reset without animation
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === slides.length + 1) {
        slidesRef.current.style.transition = 'none';
        setIsTransitioning(false);
        setCurrentIndex(1);
      } else if (currentIndex === 0) {
        slidesRef.current.style.transition = 'none';
        setIsTransitioning(false);
        setCurrentIndex(slides.length);
      } else {
        setIsTransitioning(true);
      }
    };

    const slidesContainer = slidesRef.current;
    slidesContainer.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      slidesContainer.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex, slides.length]);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        slidesRef.current.style.transition = 'transform 0.5s ease-in-out';
        setIsTransitioning(true);
      }, 50); // Small delay to allow DOM to update
    }
  }, [isTransitioning]);

  // Handle next button click
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Handle prev button click
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrevClick}>
        Prev
      </button>
      <div
        className="carousel-slides"
        ref={slidesRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="carousel-slide">{slides[slides.length - 1]}</div>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            {slide}
          </div>
        ))}
        <div className="carousel-slide">{slides[0]}</div>
      </div>
      <button className="carousel-button next" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

// Export the component as default
export default CarouselComponent;
