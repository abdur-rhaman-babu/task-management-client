import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaPlusCircle,
  FaClipboardList,
} from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { userSignOut, user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Task Management Specific Menu Items
  const menuItems = [
    { name: "Add Task", path: "/add-task", icon: <FaPlusCircle /> },
    { name: "All Tasks", path: "/", icon: <FaClipboardList /> },
  ];

  const handleLoggedOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Sign out successfull");
        navigate('/auth/login')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="bg-white border-b dark:border-gray-600 dark:bg-dark shadow-md px-5 py-4 md:px-10 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="h-10 w-10" src={logo} alt="" />
          <NavLink
            to="/"
            className="text-xl font-bold text-primary dark:text-white"
          >
            Task Manager
          </NavLink>
        </div>

        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 text-secondary font-semibold dark:text-gray-200 hover:text-primary ${
                  isActive ? "border-b-2 border-primary" : ""
                }`
              }
            >
              {item.icon} {item.name}
            </NavLink>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-secondary dark:text-white"
          >
            {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
          </button>
        </div>

        <button
          className="md:hidden text-primary dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div id="my-anchor-element-id">
              <IoMdContact className="h-10 w-10 text-primary" />
            </div>
            <div>
              <Tooltip
                anchorSelect="#my-anchor-element-id"
                content={user?.displayName}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={handleLoggedOut}>Logout</button>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-center">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 text-secondary dark:text-white ${
                  isActive
                    ? "bg-primary p-2 font-semibold text-white rounded-md"
                    : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.icon} {item.name}
            </NavLink>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-secondary dark:text-white"
          >
            {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
