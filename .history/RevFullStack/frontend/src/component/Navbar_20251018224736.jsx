import { useState } from 'react';
import '../../public/css/style.css';
import '../../public/css/hover-style.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeStyle = {
    color: "white",
  };

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Toggle the state of the menu being open or not.
 * This function toggles the state of the menuOpen state variable.
 * It is used to open or close the mobile menu.
 */
/*******  01eb8374-6238-419d-be6b-1750466a7523  *******/
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header id="header">
        <NavLink to="/" className="logo">
          <img src="img/logo.png" alt="logo" />
        </NavLink>

        <div className="phone">
          <i className="fa fa-phone"></i>+91 808 589 6073
        </div>

        {/* Toggle Button for Mobile */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>

        {/* Main Menu */}
        <nav className={`main-menu top-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink></li>
            <li><NavLink to="/aboutus" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About Us</NavLink></li>
            <li><NavLink to="/apartments" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Apartments</NavLink></li>
            <li><NavLink to="/amenities" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Amenities</NavLink></li>
            <li><NavLink to="/booking" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Booking</NavLink></li>
            <li><NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Login</NavLink></li>
            <li><NavLink to="/register" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Register</NavLink></li>
            <li><NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Contact Us</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
