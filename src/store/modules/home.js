import { getGoodPriceData, getHighScoreData } from "@/services/module/home";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("home/fetchData", (payload, { dispatch }) => {
  getGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfo(res));
  });

  getHighScoreData().then((res) => {
    dispatch(changeHighScoreInfo(res));
  });
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, actions) {
      state.goodPriceInfo = actions.payload;
    },
    changeHighScoreInfo(state, actions) {
      state.highScoreInfo = actions.payload;
    },
  },
  // extraReducers: (build) => {
  //   build.addCase(fetchGoodPriceAction.fulfilled, (state, action) => {
  //     state.goodPriceInfo = action.payload;
  //   });
  // },
});

export const { changeGoodPriceInfo, changeHighScoreInfo } = homeSlice.actions;
export default homeSlice.reducer;
