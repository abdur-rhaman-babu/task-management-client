import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/image/logo.png'
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaPlusCircle,
  FaClipboardList,
} from "react-icons/fa";

const Navbar = () => {
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

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-5 py-4 md:px-10 fixed w-full top-0 z-50">
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
                `flex items-center gap-2 text-dark font-semibold dark:text-gray-200 hover:text-primary ${
                  isActive ? "border-b-2 border-primary" : ""
                }`
              }
            >
              {item.icon} {item.name}
            </NavLink>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-800 dark:text-gray-200"
          >
            {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
          </button>

          
        </div>

        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-center">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 text-gray-800 dark:text-gray-200 ${
                  isActive ? "bg-blue-500 p-2 font-semibold text-white rounded-md" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.icon} {item.name}
            </NavLink>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-800 dark:text-gray-200"
          >
            {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
          </button>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
