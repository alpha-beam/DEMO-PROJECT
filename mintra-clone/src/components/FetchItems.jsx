import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatus";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.featchStatus);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchingDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    Dispatch(fetchStatusActions.markFetchStarted());
    fetch("http://localhost:8080/items", signal)
      .then((res) => res.json())
      .then((data) => {
        Dispatch(itemsActions.addInitialItems(data.items));
        Dispatch(fetchStatusActions.markFetchFinished());
        Dispatch(fetchStatusActions.markFetchDone());
      });
  }, [fetchStatus]);
  return <></>;
};
export default FetchItems;

// head less component only for logic not for display ui .
