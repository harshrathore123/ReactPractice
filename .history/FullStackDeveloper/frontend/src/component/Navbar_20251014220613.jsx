import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <header>
      <div className="navbar-container">
        <h1 className="logo">TravelExplorer</h1>

        <div className="auth-buttons">
          {/* Buttons should not wrap <Link> inside; instead style <Link> like a button */}
          <Link to="/login" className="btn-primary">Login</Link>
          <Link to="/register" className="btn-secondary">Sign Up</Link>
          <Link to="/menu" className="btn-secondary">Menu</Link>
        </div>
      </div>
    </header>
  );
}
