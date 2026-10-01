import { createContext, useState } from "react";

export const MyStore = createContext();
export const ContextProvider = ({ Children }) => {
  const [productData, setProductData] = useState([]);
  return (
    <MyStore.Provider value={{ productData, setProductData }}>
      {Children}
    </MyStore.Provider>
  );
};
