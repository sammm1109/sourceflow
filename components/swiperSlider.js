import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "../styles/swiper.module.scss";

SwiperCore.use([Navigation, Autoplay]);

const SwiperComponent = ({
  slides,
  spaceBetween = 50,
  slidesPerView = 1,
  loop = true,
  autoplay = { delay: 3000, disableOnInteraction: false }, // Explicitly disable interaction stopping autoplay
  showNavigation = false,
}) => {
  return (
    <div className="scroll-footer-banner">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={showNavigation ? {} : false}
        loop={loop}
        autoplay={autoplay}>
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>{slideContent}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
