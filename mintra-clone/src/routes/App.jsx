import Header from "../components/Header";
import Fotter from "../components/Fotter";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Fotter />
    </div>
  );
}

export default App;
