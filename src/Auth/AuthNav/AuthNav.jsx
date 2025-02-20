import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex space-x-4 pt-5 px-20">
      {/* Login Button */}
      <NavLink
        to="login"
        className={({ isActive }) =>
          `px-5 py-2 border border-primary font-semibold rounded-lg transition duration-300 ${
            isActive
              ? "bg-primary text-white"
              : ""
          }`
        }
      >
        Login
      </NavLink>

      {/* Join Us Button */}
      <NavLink
        to="register"
        className={({ isActive }) =>
            `px-5 py-2 border border-primary font-semibold rounded-lg transition duration-300 ${
              isActive
                ? "bg-primary text-white"
                : ""
            }`
          }
      >
        Join Us
      </NavLink>
    </div>
  );
};

export default AuthNav;
