import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const {pathname} = useLocation()

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
        <a className="text-3xl font-bold text-primary">LetsTravel</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base flex gap-5">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={() => document.getElementById('my_modal_3').showModal()} className="btn rounded-full py-1 px-5 btn-sm bg-primary text-white border-none">Login</a>
        {/* modal */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" >open modal</button> */}
        <dialog id="my_modal_3" className="modal text-black">
          <div className="modal-box">


            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
              {/* Login form here */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary text-white">Login</button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Navbar;