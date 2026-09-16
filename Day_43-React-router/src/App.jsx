import React, { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  const [toggle, setToggle] = useState("true");
  return (
    <div className="bg-black h-screen">
      <nav className="bg-gray-600 flex justify-between p-5 text-white text-xl">
        <h2>Logo</h2>
        <div className="flex gap-8 items-center ">
          <p onClick={() => setToggle("Home")} className="cursor-pointer">
            Home
          </p>
          <p onClick={() => setToggle("About")} className="cursor-pointer">
            About
          </p>
          <p onClick={() => setToggle("Contact")} className="cursor-pointer">
            Contact
          </p>
        </div>
        <div>Login</div>
      </nav>

      <div>
        {toggle === "Home" && <Home />}
        {toggle === "About" && <About />}
        {toggle === "Contact" && <Contact />}
      </div>
    </div>
  );
};

export default App;
