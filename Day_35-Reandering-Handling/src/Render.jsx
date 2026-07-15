import React from "react";
import { useState } from "react";

const Render = () => {
  console.log("app rendering..");
  const [count, setCount] = useState(0);
  let [user, setName] = useState({
    name: "ram",
  });
  return (
    <div>
      <h2>Count is {count}</h2>
      <h3>Name is {user.name}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          user.name = "sohan";
        }}
      >
        change name
      </button>
    </div>
  );
};

export default Render;
