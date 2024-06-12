import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css'; 
import { Pagination, Autoplay } from 'swiper/modules';
import styles from "./Slide.module.scss";
import gatinho from '../../assets/image/Fundo.svg'

function Slide(){
    return (
        <Swiper className={styles.mySwiper}
          slidesPerView={1}
          pagination={{
            type: 'bullets',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]} 
        >
          <SwiperSlide><img src={gatinho} alt="Slide 1" /></SwiperSlide>

        </Swiper>
      );
}

export default Slide;
