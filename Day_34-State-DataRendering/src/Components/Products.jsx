import React from "react";

const Products = ({ product, del }) => {
  return (
    <div className="m-3.5 p-1 border-2 rounded-lg w-60 ">
      <div>
        <img className="rounded-md h-30" src={product.image} alt="image" />
      </div>
      <div className="m-2">
        <h3 className="font-semibold">Product Name - {product.title} </h3>
        <p>Catogery - {product.category}</p>
        <p className="text-green-500 font-semibold">Price : ${product.price}</p>
      </div>
      <div className="  text-center">
        <button
          className="p-1.5 w-full bg-red-500 rounded-md  cursor-pointer"
          onClick={() => {
            del(product.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Products;
