import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  /* let res = useState(0)
    console.log(res); -> return Array [value, function]
     let [count , setCount] = res  */

  return (
    <div>
      <h1>Count - {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add more
      </button>
    </div>
  );
};

export default Counter;
