import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const logInUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await api.post("/auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("User logged in");
      return res.data;
    } catch (error) {
      toast.error("Login failed");
      thunkApi.rejectWithValue("login failed");
    }
  },
);

export const hydrateUserAction = createAsyncThunk(
  "auth/hydrate",
  async (_, thunkApi) => {
    let token = localStorage.getItem("accessToken");

    try {
      let res = await api.post("/auth/me", {
        header: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (error) {
      toast.error("Unauthoraized user");
      return thunkApi.rejectWithValue("Unauthoraized user");
    }
  },
);
