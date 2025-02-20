import { Outlet } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";


const MainAuth = () => {
    return (
        <div>
            <AuthNav/>
            <Outlet/>
        </div>
    );
};

export default MainAuth;