import { Outlet } from "react-router-dom";
import Nabvar from "../Navbar/Nabvar";

const Main = () => {
  return (
    <div>
      <Nabvar />
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
