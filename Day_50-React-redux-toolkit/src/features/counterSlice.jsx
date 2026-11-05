import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  // state
  initialState: {
    count: 0,
  },

  // action
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
