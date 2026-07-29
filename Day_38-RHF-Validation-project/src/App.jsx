import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import UserCard from "./Components/UserCard";
import UserForm from "./Components/UserForm";
import { use } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  console.log(users);

  return (
    <div>
      <Navbar setToggle={setToggle} />
      {toggle ? (
        users.map((elem) => {
          return <UserCard user={elem} />;
        })
      ) : (
        <div className="flex justify-center items-center m-25">
          <UserForm setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
      ;
    </div>
  );
};

export default App;
