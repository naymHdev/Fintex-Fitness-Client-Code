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
import ActivityLog from "../Dashboard/Members/ActivityLog";
import RecommendedClasses from "../Dashboard/Members/RecommendedClasses";
import ProfileSetting from "../Dashboard/Members/ProfileSetting";
import AllSubscriber from "../Dashboard/Admin/AllSubscriber";
import AllTrainers from "../Dashboard/Admin/AllTrainers";
import { AppliedTrainer } from "../Dashboard/Admin/AppliedTrainer";
import Balance from "../Dashboard/Admin/Balance";

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
      
      /////// Trainer Routes \\\\\
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
      /// Member Routes
      {
        path: 'activityLog',
        element: <ActivityLog />
      },
      {
        path: 'recommendedClasses',
        element: <RecommendedClasses />
      },
      {
        path: 'profileSetting',
        element: <ProfileSetting />
      },
      ///// Admin Routes \\\\
      {
        path: 'allSubscriber',
        element: <AllSubscriber />
      },
      {
        path: 'allTrainers',
        element: <AllTrainers />
      },
      {
        path: 'appliedTrainer',
        element: <AppliedTrainer />
      },
      {
        path: 'balance',
        element: <Balance />
      },
    ],
  },
]);
