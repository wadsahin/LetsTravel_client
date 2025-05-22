import { Link, NavLink, useLocation } from "react-router-dom";
import logo_color from "../assets/logo/leaf_colored.png";
import logo_white from "../assets/logo/leaf_white.png";

const Navbar = () => {
  const { pathname } = useLocation();

  const navlinks = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/stories">Stories</NavLink>
    <NavLink to="/destinations">Destinations</NavLink>
    <NavLink to="/trips">Trips</NavLink>
  </>
  return (
    <div className={`navbar absolute top-0 z-20 ${pathname === "/" ? "text-white" : "text-black h-20"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] text-base mt-3 w-52 p-2 shadow">
            {navlinks}
          </ul>
        </div>
        <a style={{fontFamily: "Oleo Script Swash Caps"}} className="text-4xl font-bold text-primary flex items-center">
          <img src={logo_color} className="w-14" alt="logo" />
          <span>LetsTravel</span>
        </a>
        {/* LetsTravel */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base flex gap-5">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-sm bg-primary text-white rounded-full border-none px-5 hover:text-black">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;