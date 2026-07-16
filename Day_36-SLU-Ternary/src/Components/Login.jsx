import React from "react";

const Login = ({ setToggel }) => {
  return (
    <div>
      <form
        action=""
        className="bg-white flex p-2 m-3 gap-3 flex-col w-120 h-80 rounded-2xl justify-center items-center "
      >
        <h3>Login</h3>
        <input
          className="border-2 p-1 rounded-sm w-90"
          type="email"
          placeholder="Email"
        />
        <input
          className="border-2 p-1 w-90 rounded-sm"
          type="password"
          placeholder="Password"
        />
        <button className="border-2 p-1.5 cursor-pointer w-90 rounded-sm bg-blue-600 text-white">
          Login
        </button>
        <p>
          Didn't have an Account?{" "}
          <span
            onClick={() => setToggel((prev) => !prev)}
            className="text-blue-600 cursor-pointer"
          >
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
