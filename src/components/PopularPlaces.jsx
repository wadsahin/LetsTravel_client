// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeading from "./SectionHeading";

// import required modules
import { Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import DestinationCard from './destinations/destinationCard';
import useDestinations from '../hooks/useDestinations';


const PopularPlaces = () => {
  const [destinations] = useDestinations();

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

        <div>
          {destinations &&
            destinations.map((destin) => <SwiperSlide><DestinationCard key={destin._id} destin={destin} /> </SwiperSlide>)
          }
        </div>
        

      </Swiper>
    </div>
  );
};

export default PopularPlaces;