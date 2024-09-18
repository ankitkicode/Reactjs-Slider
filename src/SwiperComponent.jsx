// Import React
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

// Import custom styles
import './SwiperComponent.css';
import { Autoplay } from 'swiper/modules';

// Define the SwiperComponent
const SwiperComponent = () => {
  // Handler for slide change event
  const handleSlideChange = () => {
    // console.log('Slide change');
  };

  // Handler for Swiper initialization
  const handleSwiperInit = (swiper) => {
    // console.log(swiper);
  };

  return (
    <Swiper
      className="swiper-container"
      spaceBetween={50}
      slidesPerView={2}
      loop={true} 
      autoplay={{ 
        delay: 2000, // Auto slide after 2 seconds
        disableOnInteraction: true // Continue auto slide even after user interactions
      }}
      centeredSlides={true}
      onSlideChange={handleSlideChange}
      onSwiper={handleSwiperInit}
      modules={[Autoplay]}
    >
      <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

// Export the component as default
export default SwiperComponent;
