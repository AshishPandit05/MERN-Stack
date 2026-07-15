import React, { useState } from "react";

const Web = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="passowrd"
        />
      </div>

      <div>
        <h2>Name is - {name}</h2>
        <h2>email is - {email}</h2>
        <h2>password is - {password}</h2>
      </div>
    </div>
  );
};

export default Web;
