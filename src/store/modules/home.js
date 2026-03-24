import { getGoodPriceData } from "@/services/module/home";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoodPriceAction = createAsyncThunk("home/fetchGoodPrice", async () => {
  const res = await getGoodPriceData();
  return res;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, actions) {
      state.goodPriceInfo = actions.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchGoodPriceAction.fulfilled, (state, action) => {
      state.goodPriceInfo = action.payload;
    });
  },
});

export const { changeGoodPriceInfo } = homeSlice.actions;
export default homeSlice.reducer;
