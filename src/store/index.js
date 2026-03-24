import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
import counterReducer from "./modules/counter";

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    counter: counterReducer,
  },
});

export default store;
