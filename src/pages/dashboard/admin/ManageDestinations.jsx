import React from 'react';
import { Link } from 'react-router-dom';

const ManageDestinations = () => {
  return (
    <div>
      <div className="w-fit mx-auto">
        <Link to="/add-destination" className="btn bg-primary text-white px-5">Add New Destination</Link>
      </div>
    </div>
  );
};

export default ManageDestinations;