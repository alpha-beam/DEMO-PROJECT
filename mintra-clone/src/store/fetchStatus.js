import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchingDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchingDone = true;
    },
    markFetchStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
