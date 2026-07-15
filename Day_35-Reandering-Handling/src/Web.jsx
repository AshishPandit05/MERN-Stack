import React, { useState } from "react";

const Web = () => {
  const [formData, setformData] = useState({});
  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setformData({ ...formData, name: e.target.value });
          }}
          type="text"
        />
        <input
          onChange={(e) => {
            setformData({ ...formData, email: e.target.value });
          }}
          type="email"
        />
        <input
          onChange={(e) => {
            setformData({ ...formData, password: e.target.value });
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
