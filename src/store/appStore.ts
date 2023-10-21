// redux/store.js or redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./films/filmsSlice";

const appStore = configureStore({
  reducer: {
    films: filmsReducer,
  },
});

export default appStore;
