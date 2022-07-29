
// swiper liberary for image transition

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
        <div style={{height:'50%'}}>
        <SwiperSlide><img className="swiper-img" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861333000" alt="1" /></SwiperSlide>
        <SwiperSlide><img className="swiper-img" src="https://rukminim1.flixcart.com/image/416/416/kwdv3bk0/headphone/5/9/2/-original-imag92pgraqqcg8u.jpeg?q=70" alt="2" /></SwiperSlide>
        <SwiperSlide><img className="swiper-img" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861336000" alt="3" /></SwiperSlide>
        <SwiperSlide><img className="swiper-img" src="https://rukminim1.flixcart.com/image/416/416/kwdv3bk0/headphone/k/f/j/-original-imag92pgr5yttjez.jpeg?q=70" alt="4" /></SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
