import { configureStore, createSlice } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatus";
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    featchStatus: fetchStatusSlice.reducer,
  },
});

export default myntraStore;
