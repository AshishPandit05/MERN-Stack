import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../Layouts/context/AuthContext";

const ProtectedRoute = () => {
  const { loggedInUser } = useContext(Auth);
  if (!loggedInUser) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
