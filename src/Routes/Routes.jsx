import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";

import Install from "../Pages/Install";

import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../pages/AppDetails";
import Home from "../pages/Home";
import Apps from "../pages/Apps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installs",
        element: <Install />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
      },
    ],
  },
]);
export default router;
