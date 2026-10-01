import React, { useContext, useEffect } from "react";
import { MyStore } from "../Context/MyContext";
import axios from "axios";

const Home = () => {
  let { productData, setProductData } = useContext(MyStore);
  let getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Error in api ", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return <div>Home page</div>;
};

export default Home;
