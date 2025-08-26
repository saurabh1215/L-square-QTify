import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

const Carousel = ({ data, renderCard }) => {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderCard(item)}</SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default Carousel;
