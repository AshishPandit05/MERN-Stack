import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 flex justify-between p-5 text-white text-xl">
        <h2>Logo</h2>
        <div className="flex gap-8 items-center ">
          <NavLink to="/" className="cursor-pointer">
            Home
          </NavLink>
          <NavLink to="about" className="cursor-pointer">
            About
          </NavLink>
          <NavLink to="products" className="cursor-pointer">
            Products
          </NavLink>
        </div>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
