import React from "react";

const Usercard = ({ user }) => {
  return (
    <div className="bg-white flex p-2  m-3 flex-col w-80 h-90 rounded-2xl">
      <div className="w-76 h-60">
        <img
          className="h-full w-full object-cover object-center  rounded-2xl "
          src={user.image}
          alt=""
        />
      </div>
      <div className="p-1">
        <h5>{user.name}</h5>
        <h5>{user.email}</h5>
      </div>
      <div className="m-2 ">
        <button className="bg-red-400 p-2 w-full rounded-md cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
