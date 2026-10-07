import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <NavLink to="/" className="logo">
          Ab.
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">Chi sono</NavLink>
          </li>

          <li>
            <NavLink to="/projects">Progetti</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contatti</NavLink>
          </li>
        </ul>
          <ThemeToggle />
      </nav>
    </header>
  );
}

export default Navbar;