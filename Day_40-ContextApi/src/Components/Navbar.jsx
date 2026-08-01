import React from "react";

const Navbar = ({ setOpenCart }) => {
  return (
    <div className="p-3 flex items-center justify-between bg-red-400">
      <div>
        <p>LOGO</p>
      </div>
      <div className="flex item-center justify-between gap-5 ">
        <div
          onClick={() => {
            setOpenCart(true);
          }}
          className="cursor-pointer"
        >
          Home
        </div>
        <div
          onClick={() => {
            setOpenCart(false);
          }}
          className="cursor-pointer"
        >
          Card
        </div>
      </div>
      <div className="">
        <button className="bg-blue-500 px-9 py-2 text-white rounded-md cursor-pointer border-none">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
