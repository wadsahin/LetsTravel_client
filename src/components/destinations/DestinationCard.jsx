import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Rating from "../Rating";


const DestinationCard = ({ destin }) => {
  const { title, description, imageUrl } = destin;
  // name, image, desc
  return (
    <div className="card card-compact bg-white rounded-none flex flex-col min-h-[500px]">
      <figure>
        <img className="min-h-[280px] object-cover" src={imageUrl} alt="destination" />
      </figure>

      <div className="p-2 gap-3 flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <Rating />
        </div>

        {/* This now stretches */}
        <p className="flex-grow text-gray-600">
          {description.length > 120 ? description.slice(0, 120) + '...' : description}
        </p>

        <div className="card-actions justify-center pb-3">
          <Link to="/" className="btn btn-sm btn-outline border border-primary text-primary px-4">
            <FaArrowRightLong /> Browse details
          </Link>
        </div>
      </div>
    </div>

  );
};

export default DestinationCard;