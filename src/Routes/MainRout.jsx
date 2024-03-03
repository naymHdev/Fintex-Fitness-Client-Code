import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Error from "../Components/Error";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Trainer from "../Pages/Trainer/Trainer";
import DashboardLayout from "../Layouts/DashboardLayout";
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
import Forum from "../Pages/Forum/Forum";
import TrainerRoutes from "./TrainerRoutes";
import ErrorDashboard from "../Dashboard/Components/ErrorDashboard";
import Profile from "../Dashboard/Components/Profile/Profile";
import { fitnessForums } from "../Api/Featured/Featured";
import Payment from "../Dashboard/Admin/Payment";
import AdminRoute from "./AdminRoute";
import Dashboard from "../Dashboard/Dashboard";
import Challenges from "../Pages/Challenges/Challenges";
import AllForum from "../Dashboard/Admin/AllForum";
import Images from "../Pages/Images/Images";

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
          // <PrivateRoute>
          <BeTrainer />
          // </PrivateRoute>
        ),
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/gallery",
        element: <Images />
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/forum",
        element: <Forum />,
        loader: () => fitnessForums(),
      },
      {
        path: "/challenges",
        element: <Challenges />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorDashboard />,
    children: [
      /////// Trainer Routes \\\\\
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "manageSlots",
        element: (
          <PrivateRoute>
            <TrainerRoutes>
              <ManageSlots />
            </TrainerRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "manageMember",
        element: (
          <PrivateRoute>
            <TrainerRoutes>
              <ManageMember />
            </TrainerRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "addNewForum",
        element: (
          <PrivateRoute>
            {/* <TrainerRoutes> */}
            <AddNewForum />
            {/* </TrainerRoutes> */}
          </PrivateRoute>
        ),
      },
      {
        path: "addNewClasses",
        element: (
          <PrivateRoute>
            <TrainerRoutes>
              <AddNewClasses />
            </TrainerRoutes>
          </PrivateRoute>
        ),
      },
      /// Member Routes
      {
        path: "activityLog",
        element: (
          <PrivateRoute>
            <ActivityLog />
          </PrivateRoute>
        ),
      },
      {
        path: "recommendedClasses",
        element: (
          <PrivateRoute>
            <RecommendedClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "profileSetting",
        element: (
          <PrivateRoute>
            <ProfileSetting />
          </PrivateRoute>
        ),
      },
      ///// Admin Routes \\\\
      {
        path: "allSubscriber",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllSubscriber />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "allTrainers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllTrainers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "appliedTrainer",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AppliedTrainer />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "balance",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Balance />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Payment />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "allForum",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllForum />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
