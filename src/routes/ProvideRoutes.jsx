import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("../layouts/Layout"));
const HomePage = lazy(() => import("../layouts/HomePage"));
const ErrorPage404 = lazy(() => import("../components/ErrorPage404"));
const Login = lazy(() => import("../components/AuthenticationUser/Login"));
const Register = lazy(() => import("../components/AuthenticationUser/Register"));
const Verify = lazy(() => import("../components/AuthenticationUser/Verify"));
const PersonalInfo = lazy(() => import("../components/UserProfile/PersonalInfo"));
// Thêm hai component mới
const ProductList = lazy(() => import("../components/Product/ProductList"));
const ProductDetails = lazy(() => import("../components/Product/ProductDetails"));
// Cart component
const Cart = lazy(() => import("../components/Cart/CartDetails"));
const CartContact = lazy(() => import("../components/Cart/CartContact"));
const CartCompletion = lazy(() => import("../components/Cart/CartCompletion"));
  

const router = (dataNavbar) =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <ProductList /> }, // Trang danh sách sản phẩm
        { path: "/product/:id", element: <ProductDetails /> }, // Trang chi tiết sản phẩm
        { path: "*", element: <ErrorPage404 /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/verify", element: <Verify /> },
        { path: "/profile/info", element: <PersonalInfo /> },
        { path: "/cart", element: <Cart />},
        { path: "/cart/contact", element: <CartContact />},
        { path: "/cart/completion", element: <CartCompletion />},
      ],
    },
  ]);
export default router;
