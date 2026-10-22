import React, { useState } from "react";
import { axioInstance } from "../config/axiosinstance";

const Products = () => {
  const getProductData = () => {
    try {
      //   let res = axio.get("https://fakestoreapi.com/products"); --> prev
      let res = axioInstance.get("/users"); // <-- update
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>products</h1>
    </div>
  );
};

export default Products;
