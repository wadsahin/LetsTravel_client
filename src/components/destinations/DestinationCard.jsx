import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Rating from "../Rating";


const DestinationCard = ({name, image, desc}) => {

  return (
    <div className="card card-compact bg-white rounded-none">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{name}</h2>
          <Rating />
        </div>
        <p>{desc}... </p>
        <div className="card-actions justify-center">
          <Link to="/" className="btn btn-sm btn-outline border border-primary  text-primary px-4"><FaArrowRightLong /> Browse details</Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;