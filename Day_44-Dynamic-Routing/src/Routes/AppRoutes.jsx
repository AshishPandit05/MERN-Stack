import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Product from "../Pages/Product";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Product />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
