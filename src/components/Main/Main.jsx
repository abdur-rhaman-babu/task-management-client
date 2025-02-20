import { Outlet } from "react-router-dom";
import Nabvar from "../Navbar/Nabvar";

const Main = () => {
  return (
    <div>
      <Nabvar />
      <div className="py-20 dark:bg-dark">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
