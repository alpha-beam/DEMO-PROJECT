import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "BagItems",
  initialState: ["002"],
  reducers: {
    addToBag: (store, action) => {
      store.push(action.payload);
    },
    removeFromBag: (store, action) => {
      return store.filter((it) => it !== action.payload);
    },
  },
});
export const BagActions = BagSlice.actions;
export default BagSlice;
