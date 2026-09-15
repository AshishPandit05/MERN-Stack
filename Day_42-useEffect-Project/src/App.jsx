import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CartScreen from "./Pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  let { isCartOpen } = useContext(MyStore);
  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
      console.log(res.data);

      // console.log(res.id);
    } catch (error) {
      console.log("Error in api", error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <Navbar setIsCartOpen={setIsCartOpen} />
      {isCartOpen ? (
        <div>
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {productsData.map((elem) => {
            return <ProductCards key={elem.id} product={elem} />;
          })}
        </div>
      )}
      ;
    </div>
  );
};

export default App;
