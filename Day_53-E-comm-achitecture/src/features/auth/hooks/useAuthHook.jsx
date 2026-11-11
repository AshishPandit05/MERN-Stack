import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../state/authSlice";

export const useAuthHook = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log(data);
  };
  const logInForm = async (data) => {
    console.log(data);
    // api call
    try {
      let response = await loginUserApi(data);
      console.log(response);
      dispatch(addUser(response));
      toast.success("User logged in");
    } catch (error) {
      console.log("error in api ", error);
    }
    reset();
  };
  return {
    navigate,
    register,
    reset,
    handleSubmit,
    errors,
    registerForm,
    logInForm,
  };
};
