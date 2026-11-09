import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  let navigate = useNavigate();
  let {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("Register Successfully");
    reset();
  };
  const logInForm = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("invalid somthing..");
    }
    dispatch(addUser(user));
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("Logged In");
    reset();
  };

  return {
    navigate,
    handleSubmit,
    reset,
    register,
    errors,
    registerForm,
    logInForm,
  };
};
export default useAuth;
