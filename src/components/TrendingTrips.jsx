import SectionHeading from "./SectionHeading";
import TripCard from "./trips/TripCard";

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import useTrips from "../hooks/useTrips";

const TrendingTrips = () => {
  const [trips] = useTrips();
  return (
    <div className='w-11/12 mx-auto mb-14'>
      <SectionHeading title="Trending Trips" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">

        {
          trips &&
          trips.map((trip) => <TripCard key={trip._id} trip={trip} />)
        }
      </div>
      <div className="mt-5 ml-auto w-fit"> 
        <Link className="btn btn-sm btn-outline border-primary text-primary rounded-full">Browse More <FaArrowRightLong /></Link>
      </div>
    </div>
  );
};

export default TrendingTrips;