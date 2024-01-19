import { createSlice } from "@reduxjs/toolkit";
import { DefaultItems } from "../data/items";

const itemsSlice = createSlice({
  name: "itmes",
  initialState: DefaultItems,
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice;
