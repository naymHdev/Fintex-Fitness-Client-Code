import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Error from "../Components/Error";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Trainer from "../Pages/Trainer/Trainer";
import DashboardLayout from "../Layouts/DashboardLayout";
import Gallery from "../Pages/Gallery/Gallery";
import Classes from "../Pages/Classes/Classes";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";
import BeTrainer from "../Pages/Trainer/BeTrainer";
import Pricing from "../Pages/Trainer/Pricing";
import PrivateRoute from "./PrivateRoute";
import ManageSlots from "../Dashboard/Trainer/ManageSlots";
import ManageMember from "../Dashboard/Trainer/ManageMember";
import AddNewForum from "../Dashboard/Trainer/AddNewForum";
import AddNewClasses from "../Dashboard/Trainer/AddNewClasses";
import Profile from "../Dashboard/Components/Profile/Profile";

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
        path: "/trainerDetails/:id",
        element: <TrainerDetails />,
      },
      {
        path: "/beTrainer",
        element: (
          <PrivateRoute>
            <BeTrainer />
          </PrivateRoute>
        ),
      },
      {
        path: "/pricing",
        element: <Pricing />,
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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: 'profile',
        element: <Profile />
      },
      /////// Trainer Section \\\\\
      {
        path: "manageSlots",
        element: <ManageSlots />,
      },
      {
        path: "manageMember",
        element: <ManageMember />,
      },
      {
        path: "addNewForum",
        element: <AddNewForum />,
      },
      {
        path: "addNewClasses",
        element: <AddNewClasses />,
      },
    ],
  },
]);
