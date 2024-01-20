import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "itmes",
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
      // console.log("hii", store, action);
      return action.payload;
    },
  },
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice;
