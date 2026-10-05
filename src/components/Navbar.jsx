import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { navLinks } from "../data/content.js";
import "./Navbar.css";

// Site-wide navigation. Tracks its own open/closed state for the
// mobile menu; on desktop the links are always visible via CSS.
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Logo />

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className={`menu-icon ${isMenuOpen ? "is-open" : ""}`} />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? "is-open" : ""}`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link is-active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
