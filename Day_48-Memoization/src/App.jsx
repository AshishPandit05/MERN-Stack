import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "ram" });
  console.log("App rendering");

  return (
    <div>
      <p>User name {user.name}</p>
      <button onClick={() => setUser({ ...user, name: "Rohan" })}>
        Change Name{" "}
      </button>
      <p>count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Home />
      <About user={user} /> // break the memo becoz user is reference type
      <Contact />
    </div>
  );
};

export default App;
