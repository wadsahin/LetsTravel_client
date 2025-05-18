import SectionHeading from "./SectionHeading";
import TripCard from "./trips/TripCard";

// images
import img1 from "../assets/trips/Sonargaon.jpg";
import img2 from "../assets/trips/cox-bazar.jpg";
import img3 from "../assets/trips/srimongal.jpg";

// import img4 from "../assets/trips/Kuakata.jpg";
// import img5 from "../assets/trips/Amiakhum Waterfall.jpg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const TrendingTrips = () => {
  return (
    <div className='w-11/12 mx-auto mb-14'>
      <SectionHeading title="Trending Trips" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <TripCard
          img={img1}
          location="Sonargaon"
          price="11000"
          startDate="3 June 25"
          endDate="10 Jun 25"
          days="7"
        />

        <TripCard
          img={img2}
          location="Cox-bazar"
          price="10500"
          startDate="4 June 25"
          endDate="10 Jun 25"
          days="6"
        />
        <TripCard
          img={img3}
          location="Srimangal"
          price="6500"
          startDate="5 June 25"
          endDate="10 Jun 25"
          days="5"
        />
      </div>
      <div className="mt-5 ml-auto w-fit"> 
        <Link className="btn btn-sm btn-outline border-primary text-primary rounded-full">Browse More <FaArrowRightLong /></Link>
      </div>
    </div>
  );
};

export default TrendingTrips;