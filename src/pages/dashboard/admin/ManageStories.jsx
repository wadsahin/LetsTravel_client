import { Link } from "react-router-dom";

const ManageStories = () => {
  return (
    <div>
      <div className="w-fit mx-auto">
        <Link to="/add-blog-post" className="btn bg-primary text-white px-5">Add a Story</Link>
      </div>
    </div>
  );
};

export default ManageStories;