import { useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Usercard from "./Components/Usercard";

const App = () => {
  const [toggel, setToggel] = useState(true);
  const [users, setUsers] = useState([]);
  console.log(users.name);

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div>
        {users.map((elem) => (
          <Usercard user={elem} />
        ))}
      </div>

      <Register setUsers={setUsers} setToggel={setToggel} />
    </div>
  );
};

export default App;
