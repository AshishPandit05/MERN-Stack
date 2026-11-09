import React from "react";
import { NavLink } from "react-router";
import { LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <div className="p-5 flex justify-between ">
      <h1>SkyDart</h1>
      <div className="flex justify-between items-center gap-10">
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
          to={"/main/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
          to={"/main/shop"}
        >
          Shop
        </NavLink>
      </div>
      <div className="flex justify-around items-center gap-5">
        <h1>
          Hey, <strong className="text-green-500">Dev</strong>{" "}
        </h1>
        <button className="border-2 pl-5 pr-5 rounded-md pb-1 hover:border-green-400 cursor-pointer">
          Cart
        </button>
        <button className="border-2 pl-3 pr-3 rounded-md pt-1 pb-1  hover:text-red-500 cursor-pointer">
          <LogOut size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
