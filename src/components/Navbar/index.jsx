import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navbarItems } from "../../constants";
import logo from "/vite.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { Moon, Sun } from "@phosphor-icons/react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [active, setActive] = useState("Beranda");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navbarItems.find((item) => item.path === currentPath);
    if (activeItem) {
      setActive(activeItem.name);
    }
  }, [location]);

  useEffect(() => {
    const root = document.getElementById("root");
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [theme]);

  const handleChangeTheme = () => toggleTheme();
  return (
    <nav className="bg-white dark:bg-[#002B36] text-[#1F316F] dark:text-gray-100 p-4 border-b border-gray-100 shadow-sm dark:border-none">
      <div className="container mx-auto flex justify-between">
        <div>
          <img
            src={logo}
            alt="logo"
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <ul className="flex gap-6 justify-center items-center">
          {navbarItems.map((item) => (
            <li
              key={item.id}
              className={`p-1 cursor-pointer ${
                active == item.name &&
                "text-black dark:text-white font-semibold border-b-4 border-primary"
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button
            onClick={handleLogout}
            className="py-2 px-4 rounded-lg bg-white dark:bg-secondary border border-secondary text-secondary dark:text-white hover:text-white dark:hover:text-secondary hover:bg-secondary dark:hover:bg-white hover:border-transparent dark:hover:border-secondary"
          >
            Log out
          </button>
          <button
            className="p-2 rounded-full bg-white border border-secondary text-secondary hover:text-white hover:bg-secondary hover:border-transparent "
            onClick={handleChangeTheme}
          >
            {theme == 'dark' ? <Moon size={24}/> : <Sun size={24} /> }
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
