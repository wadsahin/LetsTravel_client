// import required modules
// import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slide_1 from './Slide_1';
import Slide_2 from './Slide_2';
import Slide_3 from './Slide_3';

const Sliders = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide_1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide_2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide_3 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliders;