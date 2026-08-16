import { createContext } from "react";

export let MyStore = createContext();

export let ContextProvider = ({ childern }) => {
  const [data, setData] = useState("data");

  return <MyStore.Provider value={data}>{childern}</MyStore.Provider>;
};
