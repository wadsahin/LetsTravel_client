import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../pages/dashboard/Sidebar';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden font-poppins">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-200">
        <div className="p-4">
          {/* Toggle Button for Mobile */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden mb-4 py-2 text-primary rounded flex gap-2"
          >
            <MdOutlineSpaceDashboard size={34} /> <span className='text-2xl font-semibold'>Welcome to dashboard</span>
          </button>

          {/* Render Routes Here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
