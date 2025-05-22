import { Home, MapPinCheck, Plane, UserRound, Users, Waypoints } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed md:static z-50 h-full bg-[#6F2A33] text-white shadow-lg w-64 transition-transform transform md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button
            className="md:hidden text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-64px)] p-4">
          {/* Your sidebar menu links here */}
          <ul className="space-y-5">
            <li className="flex items-center gap-2">
              <Home />
              <NavLink to="/dashboard">Admin Home</NavLink>
            </li>
            <li className="flex items-center gap-2">
              <Users />
              <NavLink to="/dashboard/manage-users">Users</NavLink>
            </li>
            <li className="flex items-center gap-2">
              <Waypoints />
              <NavLink to="/dashboard/manage-stories">Manage Stories</NavLink>
            </li>
            <li className="flex items-center gap-2">
              <Plane />
              <NavLink to="/dashboard/manage-trips">Manage Trips</NavLink>
            </li>
            <li className="flex items-center gap-2">
              <MapPinCheck />
              <NavLink to="/dashboard/manage-destinations">Manage Destinatons</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
