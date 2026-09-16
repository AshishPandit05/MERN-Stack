import React, { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { NavLink, Route, Router, Routes } from "react-router";

const App = () => {
  const [toggle, setToggle] = useState("true");
  return (
    <div className="bg-black h-screen">
      <nav className="bg-gray-600 flex justify-between p-5 text-white text-xl">
        <h2>Logo</h2>
        <div className="flex gap-8 items-center ">
          <NavLink to="/" className="cursor-pointer">
            Home
          </NavLink>
          <NavLink to="about" className="cursor-pointer">
            About
          </NavLink>
          <NavLink to="contact" className="cursor-pointer">
            Contact
          </NavLink>
        </div>
        <div>Login</div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
