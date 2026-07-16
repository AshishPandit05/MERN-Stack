import React from "react";
import { useState } from "react";

const Register = ({ setToggel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  console.log(users);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white flex p-2  gap-3 flex-col w-120 h-80 rounded-2xl justify-center items-center "
      >
        <h3>Register</h3>
        <input
          value={formData.name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Name"
          className="border-2 p-1 rounded-sm w-90"
        />
        <input
          value={formData.email}
          name="email"
          onChange={handleChange}
          className="border-2 p-1 rounded-sm w-90"
          type="email"
          placeholder="Email"
        />
        <input
          value={formData.password}
          name="password"
          onChange={handleChange}
          className="border-2 p-1 w-90 rounded-sm"
          type="password"
          placeholder="Password"
        />
        <button className="border-2 p-1.5 cursor-pointer w-90 rounded-sm bg-blue-600 text-white">
          Register
        </button>
        <p>
          Already have an Account?{" "}
          <span
            onClick={() => setToggel((prev) => !prev)}
            className="text-blue-600 cursor-pointer"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
