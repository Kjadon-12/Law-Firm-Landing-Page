import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import Card from "../Card/Card";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import { ReactComponent as Prev } from "../../assets/Prev.svg";
import { ReactComponent as Next } from "../../assets/Next.svg";
import { useSwiper } from "swiper/react";

const Carousel = ({ data }) => {
    const CarouselPrev = () => {
        const swiper = useSwiper();
    
        return (
          <div className={styles.prevBtn}>
            <Prev onClick={() => swiper.slidePrev()} />
          </div>
        );
      };
      const CarouselNext = () => {
        const swiper = useSwiper();
    
        return (
          <div className={styles.nextBtn}>
            <Next onClick={() => swiper.slideNext()}></Next>
          </div>
        );
      };
      const breakpoints = {
        576: {
          slidesPerView: 1, 
        },
        900: {
          slidesPerView: 3, 
        },
        
        2460: {
          slidesPerView: 3, 
        },
      };
      
  return (
    <>
      <Swiper
        spaceBetween={23}
        initialSlide={0}
        modules={{ Navigation }}
        // slidesPerView={3}
        // slidesPerGroup={3}
        allowTouchMove
       breakpoints={breakpoints}
        onSwiper={(swiper) => console.log(swiper)}
      >
       <div className={styles.carouselBtn}>
          <CarouselPrev />
          <CarouselNext />
        </div>

        {data.map((item , index) => (
          <SwiperSlide key={item.id}>
            <Card data={item} type="clients" position={index} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
      
    </>
  );
};

export default Carousel;
