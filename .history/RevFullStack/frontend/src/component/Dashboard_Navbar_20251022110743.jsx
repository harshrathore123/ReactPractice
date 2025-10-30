import { useState } from "react";
import "../../public/css/style.css";
import "../../public/css/hover-style.css";
import { NavLink } from "react-router-dom";

export default function Dashboard_Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeStyle = {
    color: "white",
  };

  // Toggle menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when clicking a link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header id="header">
      <NavLink to="/" className="logo">
        <img src="img/logo.png" alt="logo" />
      </NavLink>

      <div className="phone">
        <i className="fa fa-phone"></i> +91 808 589 6073
      </div>

      {/* Hamburger icon for mobile */}
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>

      {/* Navigation */}
      <nav className={`main-menu top-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={handleLinkClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              onClick={handleLinkClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apartments"
              onClick={handleLinkClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Apartments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/amenities"
              onClick={handleLinkClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Amenities
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              onClick={handleLinkClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              onClick={handleLinkClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
