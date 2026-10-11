import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/siteContent";

import "./ThemeToggle.css";

function ThemeToggle() {
  const { language } = useLanguage();
  const content = translations[language].themeToggle;
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
      aria-label={theme === "dark" ? content.enableLight : content.enableDark}
      title={theme === "dark" ? content.lightTitle : content.darkTitle}
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