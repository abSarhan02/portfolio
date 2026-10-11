import { NavLink } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { navigationItems, translations } from "../../data/siteContent";

import "./Navbar.css";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <NavLink to="/" className="logo">
          Ab.
        </NavLink>

        <ul className="nav-links">
          {navigationItems.map(({ to, key }) => (
            <li key={to}>
              <NavLink to={to}>{translations[language].nav[key]}</NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            {language === "it" ? "EN" : "IT"}
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;