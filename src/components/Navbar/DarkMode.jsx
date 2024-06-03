import React from 'react';
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative flex justify-between items-center">
    {theme === "light" ? (
      <FaMoon 
        onClick={toggleTheme}
        className="w-5 h-5 cursor-pointer rounded-full transition-all duration-300 absolute right-2 z-10 opacity-100
          shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-gray "
      />
    ) : (
      <FiSun 
        onClick={toggleTheme}
        className="w-5 h-5 cursor-pointer rounded-full transition-all duration-300  right-0 z-10 opacity-100
          shadow-md hover:shadow-lg text-white dark:text-white top
          "
      />
    )}
  </div>
  );
};

export default DarkMode;
