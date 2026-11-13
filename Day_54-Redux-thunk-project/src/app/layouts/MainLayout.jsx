import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <p>Navbar</p>
      <Outlet />
    </div>
  );
};

export default MainLayout;
