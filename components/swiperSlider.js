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
  className = "",
  tableSlidesPerView = 0,
  prevEl = "",
  nextEl = "",
  children,
}) => {
  console.log("prevEl", prevEl);
  return (
    <div className="scroll-footer-banner">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={showNavigation ? { prevEl: prevEl, nextEl: nextEl } : false}
        loop={loop}
        autoplay={autoplay}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: tableSlidesPerView ? tableSlidesPerView : 3,
          },
          1024: {
            slidesPerView: slidesPerView ? slidesPerView : 5,
          },
        }}>
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} className={className}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
