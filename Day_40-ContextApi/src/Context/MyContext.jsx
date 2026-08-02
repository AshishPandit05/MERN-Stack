import { createContext, useState } from "react";

export let MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [centralData, setCentralData] = useState("Data is here");

  return <MyStore.Provider value={centralData}>{children}</MyStore.Provider>;
};
