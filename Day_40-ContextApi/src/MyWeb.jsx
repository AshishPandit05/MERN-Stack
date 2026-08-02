import React, { useContext } from "react";
import { MyStore } from "./Context/MyContext";

const MyWeb = () => {
  let cd = useContext(MyStore);
  console.log(cd);

  return (
    <div>
      {/* <h2>{cd}</h2> */}
      <h1>I am new web</h1>
    </div>
  );
};

export default MyWeb;
