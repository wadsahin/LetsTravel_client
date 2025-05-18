import PopularPlaces from "../components/PopularPlaces";
import Sliders from "../components/sliders/Sliders";
import TrendingTrips from "../components/TrendingTrips";


const Home = () => {
  return (
    <div className="bg-gray-100">
      <Sliders />
      <PopularPlaces />
      <TrendingTrips />
    </div>
  );
};

export default Home;