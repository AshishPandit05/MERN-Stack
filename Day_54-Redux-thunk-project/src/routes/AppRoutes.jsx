import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../app/layouts/AuthLayout";
import MainLayout from "../app/layouts/MainLayout";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import HomePage from "../shered/ui/pages/HomePage";
import AboutPage from "../shered/ui/pages/AboutPage";
import ProductPage from "../features/product/ui/pages/ProductPage";
import CartPage from "../features/cart/ui/pages/CartPage";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateUserAction } from "../features/auth/state/authAction";

const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      try {
        dispatch(hydrateUserAction());
      } catch (error) {
        console.log("error in hydrateUser api ", error);
      }
    })();
  }, []);
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
            {
              path: "product",
              element: <ProductPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
