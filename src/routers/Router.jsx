import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Stories from "../pages/Stories";
import Destinations from "../pages/Destinations";
import Trips from "../pages/trips/Trips";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import AddNewTrip from "../pages/trips/AddNewTrip";
import BlogPostGrid from "../pages/blogs/BlogPostGrid";
import AddBlogPost from "../pages/blogs/AddBlogPost";
import AddDestination from "../pages/destinations/AddDestination";
import Dashboard from "../layouts/Dashboard";
import AdminHome from "../pages/dashboard/admin/AdminHome";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import ManageTrips from "../pages/dashboard/admin/ManageTrips";
import ManageStories from "../pages/dashboard/admin/ManageStories";
import ManageDestinations from "../pages/dashboard/admin/ManageDestinations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/stories",
        element: <BlogPostGrid />
      },
      {
        path: "/",
        element: <Destinations />
      },
      {
        path: "/",
        element: <Trips />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/add-new-trip",
        element: <AddNewTrip />
      },
      {
        path: "/add-blog-post",
        element: <AddBlogPost />
      },
      {
        path: "/add-destination",
        element: <AddDestination />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AdminHome />
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers />
      },
      {
        path: "/dashboard/manage-trips",
        element: <ManageTrips />
      },
      {
        path: "/dashboard/manage-stories",
        element: <ManageStories />
      },
      {
        path: "/dashboard/manage-destinations",
        element: <ManageDestinations />
      },
    ]
  },
]);

export default router;