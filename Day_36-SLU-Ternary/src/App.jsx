import { useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
  const [toggel, setToggel] = useState(true);
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      {toggel ? (
        <Login setToggel={setToggel} />
      ) : (
        <Register setToggel={setToggel} />
      )}
    </div>
  );
};

export default App;
