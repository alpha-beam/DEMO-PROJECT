import { configureStore, createSlice } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatus";
import BagSlice from "./BagSlice";
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    featchStatus: fetchStatusSlice.reducer,
    bag: BagSlice.reducer,
  },
});

export default myntraStore;
