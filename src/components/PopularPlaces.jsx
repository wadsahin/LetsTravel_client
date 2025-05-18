// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeading from "./SectionHeading";

import des_img_1 from "../assets/destinations/Barisal.jpg";
import des_img_2 from "../assets/destinations/Paharpur.jpg";
import des_img_3 from "../assets/destinations/Bagerhat.jpg";
import des_img_4 from "../assets/destinations/sundarban.jpg";
import des_img_5 from "../assets/destinations//ctg.jpg";

// import required modules
import { Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import DestinationCard from './destinations/destinationCard';


const PopularPlaces = () => {

  return (
    <div className='w-11/12 mx-auto'>
      <SectionHeading title="Popular Places" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DestinationCard
            name="Barishal"
            image={des_img_1}
            desc="Barisal is known to be the floating city of Bangladesh situated in the heart of the Ganges Delta. It is one of the best tourist places in Bangladesh"
          />
        </SwiperSlide>

        <SwiperSlide>
          <DestinationCard
            name="Paharpur"
            image={des_img_2}
            desc="Paharpur is a popular archaeological site in Bangladesh where you can find the Ruins of the Buddhist Vihara. It gives evidence"
          />
        </SwiperSlide>

        <SwiperSlide>
          <DestinationCard
            name="Bagerhat"
            image={des_img_3}
            desc="If you're looking for the best tourist places in Bangladesh, you should definitely visit Bagerhat, a historical town where you can unveil the mysteries of the past."
          />
        </SwiperSlide>

        <SwiperSlide>
          <DestinationCard
            name="Sundarban"
            image={des_img_4}
            desc="The Sundarbans is the world's largest mangrove forest, spread between Bangladesh and India. It is a UNESCO World Heritage"
          />
        </SwiperSlide>

        <SwiperSlide>
          <DestinationCard
            name="Chattogram"
            image={des_img_5}
            desc="Chattogram is a financial center and a major coastal city in Southeastern Bangladesh. It is situated
            "
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default PopularPlaces;