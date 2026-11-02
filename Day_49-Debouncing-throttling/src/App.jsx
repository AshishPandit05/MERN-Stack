import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [productData, setProductData] = useState([]);

  let getProduct = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data);
    console.log(productData);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {productData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
