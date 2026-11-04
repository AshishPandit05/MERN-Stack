import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState(null);

  let getProduct = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data);
    console.log(productData);
  };

  useEffect(() => {
    getProduct();
  }, []);

  let filterData = () => {
    let result = productData.filter((val) => {
      return val.title === searchData;
    });
    console.log(result);
  };

  useEffect(() => {
    filterData();
  }, [searchData]);

  return (
    <div>
      <div>
        <input
          style={{ padding: "10px", fontSize: "20px" }}
          type="text"
          placeholder="Search Products"
          onChange={(e) => setSearchData(e.target.val)}
        />
      </div>

      {productData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
