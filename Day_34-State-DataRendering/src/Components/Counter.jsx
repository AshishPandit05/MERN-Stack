import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div className="m-2 text-3xl p-1.5 gap-2">
      <h3>Counter - {count}</h3>
      <button
        className="bg-green-400 border-2 border-solid rounded-[5px] text-xl cursor-pointer"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
