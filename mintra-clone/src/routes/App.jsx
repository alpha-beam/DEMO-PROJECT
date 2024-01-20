import Header from "../components/Header";
import Fotter from "../components/Fotter";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import LoadingSpinner from "../components/LoadingSpinner";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
function App() {
  const featchStatus = useSelector((store) => store.featchStatus);
  return (
    <div>
      <Header />
      <FetchItems />
      {featchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Fotter />
    </div>
  );
}

export default App;
