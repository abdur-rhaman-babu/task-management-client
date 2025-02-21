import { Outlet } from "react-router-dom";
import Nabvar from "../Navbar/Nabvar";

const Main = () => {
  return (
    <div>
      <Nabvar />
      <div className="py-24 dark:bg-dark min-h-[100vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
