
// swiper liberary for image transition

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ImageUrl } from "../../utils/urls";
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
          {ImageUrl.map(elem => {
            return (
              <SwiperSlide key={elem}><img className="swiper-img" src={elem} alt=""/></SwiperSlide>
            )
          })}
        
        
        </div>
      </Swiper>
    </>
  );
}
