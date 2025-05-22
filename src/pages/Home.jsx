import { Helmet } from "react-helmet";
import PopularPlaces from "../components/PopularPlaces";
import Sliders from "../components/sliders/Sliders";
import TrendingTrips from "../components/TrendingTrips";


const Home = () => {
  return (
    <div className="bg-gray-100">
      <Helmet>
        <title>Home | LetsTravel</title>
      </Helmet>
      <Sliders />
      <PopularPlaces />
      <TrendingTrips />
    </div>
  );
};

export default Home;