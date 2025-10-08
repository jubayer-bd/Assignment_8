import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Install from "../Pages/Install";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p> 404 | Error </p>,
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
        path: "installs",
        element: <Install />,
      },
    ],
  },
]);
export default router;
