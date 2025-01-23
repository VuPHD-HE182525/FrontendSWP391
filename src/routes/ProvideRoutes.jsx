import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("../layouts/Layout"));
const HomePage = lazy(() => import("../layouts/HomePage"));
const ErrorPage404 = lazy(() => import("../components/ErrorPage404"));


const router = (dataNavbar) => createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "*", element: <ErrorPage404 /> },
    ]
  }
]);
export default router;
