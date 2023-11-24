import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Error from "../Components/Error";
import Register from "../Auth/Register";
import Login from "../Auth/Login";

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
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);
