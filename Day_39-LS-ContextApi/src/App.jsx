import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import UserCard from "./Components/UserCard";
import UserForm from "./Components/UserForm";
import { use } from "react";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("userData")) || [];
  });

  const deleteCard = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id;
    });
    setUsers(filterUser);
    localStorage.setItem("userData", JSON.stringify(filterUser));
  };

  const [updatedData, setUpdatatedData] = useState(null);
  console.log(updatedData);

  return (
    <div>
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex flex-wrap gap-3">
          {users.map((elem, index) => {
            return (
              <UserCard
                setUpdatatedData={setUpdatatedData}
                setToggle={setToggle}
                key={index}
                deleteCard={deleteCard}
                ind={index}
                user={elem}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center m-25">
          <UserForm
            updatedData={updatedData}
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
          />
        </div>
      )}
      ;
    </div>
  );
};

export default App;
