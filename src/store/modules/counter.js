import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 20,
  },
  reducers: {
    addNumberAction(state, { payload }) {
      state.counter += payload;
    },
    subNumberAction(state, { payload }) {
      state.counter -= payload;
    },
  },
});

export const { addNumberAction, subNumberAction } = counterSlice.actions;
export default counterSlice.reducer;
