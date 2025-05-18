import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const {pathname} = useLocation();
  // console.log({pathname})
  return (
    <div className="font-poppins">
      <Navbar />
      <div className={`min-h-screen ${pathname !== "/" ? 'mt-20' : ''}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;