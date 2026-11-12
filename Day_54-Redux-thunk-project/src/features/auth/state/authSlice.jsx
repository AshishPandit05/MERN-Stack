import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, logInUserAction } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    extraReducers: (builder) => {
      builder
        .addCase(logInUserAction.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(logInUserAction.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isAuthenticated = true;
          state.isLoading = false;
        })
        .addCase(logInUserAction.rejected, (state, action) => {
          state.isLoading = false;
        })
        .addCase(hydrateUserAction.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(hydrateUserAction.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isAuthenticated = true;
          state.isLoading = false;
        })
        .addCase(hydrateUserAction.rejected, (state, action) => {
          state.isLoading = false;
        });
    },
  },
});
export const { addUser, removeUser, isLoading } = authSlice.actions;
export default authSlice.reducer;
