import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logInUserAction } from "../state/authAction";

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
      dispatch(logInUserAction(data));
    } catch (error) {
      console.log("error in api ", error);
    }
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
