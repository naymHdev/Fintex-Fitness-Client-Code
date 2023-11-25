import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Error from "../Components/Error";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Trainer from "../Pages/Trainer/Trainer";
import DashboardLayout from "../Layouts/DashboardLayout";
import Activity from "../Dashboard/Members/Activity";
import Gallery from "../Pages/Gallery/Gallery";
import Classes from "../Pages/Classes/Classes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trainer",
        element: <Trainer />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
        {
            path: 'activity',
            element: <Activity />
        }
    ]
  }
]);
