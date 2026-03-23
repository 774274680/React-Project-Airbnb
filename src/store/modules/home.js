import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    name: "zs",
    age: 30,
  },
  reducers: {
    changeHighScore(state, actions) {
      state.high_score = actions.payload;
    },
  },
});

export const { changeHighScore } = homeSlice.actions;
export default homeSlice.reducer;
