import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchingDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return (state.fetchingDone = true);
    },
    markFetchStarted: (state) => {
      return (state.currentlyFetching = true);
    },
    markFetchFinished: (state) => {
      return (state.currentlyFetching = false);
    },
  },
});
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
