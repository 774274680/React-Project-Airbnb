import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getDiscountData,
  getGoodPriceData,
  getHighScoreData,
  getLongforData,
  getPlusData,
  getRecommendData,
} from "@/services/module/home";

export const fetchHomeDataAction = createAsyncThunk("home/fetchData", (payload, { dispatch }) => {
  getGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfo(res));
  });

  getHighScoreData().then((res) => {
    dispatch(changeHighScoreInfo(res));
  });

  getDiscountData().then((res) => {
    dispatch(changeDiscountInfo(res));
  });

  getRecommendData().then((res) => {
    dispatch(changeRecommendInfo(res));
  });

  getLongforData().then((res) => {
    dispatch(changeLongforInfo(res));
  });

  getPlusData().then((res) => {
    dispatch(changePlusInfo(res));
  });
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, actions) {
      state.goodPriceInfo = actions.payload;
    },
    changeHighScoreInfo(state, actions) {
      state.highScoreInfo = actions.payload;
    },
    changeDiscountInfo(state, actions) {
      state.discountInfo = actions.payload;
    },
    changeRecommendInfo(state, actions) {
      state.recommendInfo = actions.payload;
    },
    changeLongforInfo(state, actions) {
      state.longforInfo = actions.payload;
    },
    changePlusInfo(state, actions) {
      state.plusInfo = actions.payload;
    },
  },
  // extraReducers: (build) => {
  //   build.addCase(fetchGoodPriceAction.fulfilled, (state, action) => {
  //     state.goodPriceInfo = action.payload;
  //   });
  // },
});

export const {
  changeGoodPriceInfo,
  changeHighScoreInfo,
  changeDiscountInfo,
  changeRecommendInfo,
  changeLongforInfo,
  changePlusInfo,
} = homeSlice.actions;
export default homeSlice.reducer;
