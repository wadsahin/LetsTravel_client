import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Stories from "../pages/Stories";
import Destinations from "../pages/Destinations";
import Trips from "../pages/Trips";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

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
        element: <Stories />
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
    ]
  },
]);

export default router;