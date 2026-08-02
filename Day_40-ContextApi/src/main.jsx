import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./Context/MyContext.jsx";
import MyWeb from "./MyWeb.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <MyWeb />
  </ContextProvider>,
);
