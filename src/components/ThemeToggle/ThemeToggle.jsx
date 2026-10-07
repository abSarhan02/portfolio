import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import "./ThemeToggle.css";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? "Attiva tema chiaro"
          : "Attiva tema scuro"
      }
      title={
        theme === "dark"
          ? "Tema chiaro"
          : "Tema scuro"
      }
    >
      <span
        className={`theme-toggle-icon ${
          theme === "dark" ? "sun" : "moon"
        }`}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </span>
    </button>
  );
}

export default ThemeToggle;