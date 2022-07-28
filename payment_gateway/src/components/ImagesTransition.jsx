import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ImagesTransition.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://rukminim1.flixcart.com/image/416/416/kwdv3bk0/headphone/s/b/z/-original-imag92pgvvnbk3ys.jpeg?q=70" alt="1" /></SwiperSlide>
        <SwiperSlide><img src="https://rukminim1.flixcart.com/image/416/416/kwdv3bk0/headphone/5/9/2/-original-imag92pgraqqcg8u.jpeg?q=70" alt="2" /></SwiperSlide>
        <SwiperSlide><img src="https://rukminim1.flixcart.com/image/416/416/kwdv3bk0/headphone/f/s/e/-original-imag92pggqg9jbdg.jpeg?q=70" alt="3" /></SwiperSlide>
        <SwiperSlide><img src="https://rukminim1.flixcart.com/image/416/416/kwdv3bk0/headphone/k/f/j/-original-imag92pgr5yttjez.jpeg?q=70" alt="4" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
