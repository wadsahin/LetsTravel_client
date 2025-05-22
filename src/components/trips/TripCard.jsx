import { CiTimer } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { TbCurrencyTaka } from "react-icons/tb";

const TripCard = ({trip}) => {
  // img, location, price, startDate, endDate, days
  const {picture, title, destination, amount, startDate, endDate} = trip;

  return (
    <div className="card card-compact h-[500px]">
      <figure className="h-full rounded-2xl w-full">
        <img
          src={picture}
          className="w-full h-full object-cover"
          alt="Shoes" />
      </figure>
      <div className="card-body absolute bottom-3 bg-black bg-opacity-80 text-white rounded-md w-11/12 mx-5">
        <div className="flex justify-between">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title"><IoLocationSharp /> {destination}</h2>
          <span></span>
        </div>
        <div className="flex justify-between my-2">
          <p className="flex items-center gap-1"><CiTimer size={20} /> <span>{startDate}</span></p>
          <p className="flex items-center gap-1"><CiTimer size={20} /><span> {endDate}</span></p>
        </div>
        <p className="flex items-center gap-1"><LuCalendarDays size={20} /> <span>{5} Days</span></p>
        <p className="flex items-center gap-1 mt-2"><TbCurrencyTaka size={24} /> <span>{amount} Tk</span></p>
        <div className="card-actions justify-center">

          <button className="btn bg-primary border-none btn-sm text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;