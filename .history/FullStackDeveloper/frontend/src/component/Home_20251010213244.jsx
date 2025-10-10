import './Home.css';
import { Link } from 'react-router-dom';
export default function Home(){
    return(
        <>
        <header>
        <div className="navbar-container">
          <h1 className="logo">TravelExplorer</h1>
          <nav>
            <Link to={"#"}>Home</Link>
            <Link to={"#"}>Destinations</Link>
            <Link to={"#"}>Packages</Link>
            <Link to={"#"}>Contact</Link>
          </nav>
          <div className="auth-buttons">
            <button className="btn-primary">
              <Link to={'/login'} style={{ color: "white", textDecoration: "none" }}>
                Login
              </Link>
            </button>
            <button className="btn-secondary">
              <a href="/api/signup" style={{ color: "#4f46e5", textDecoration: "none" }}>
                Sign Up
              </a>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="hero-content">
          <h2>Explore The World 🌍</h2>
          <p>Plan your next adventure with us. Best destinations, best packages, and memories for a lifetime.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span>✈️</span>
            <h3>Easy Booking</h3>
            <p>Book flights, hotels, and tours in just a few clicks.</p>
          </div>
          <div className="feature-card">
            <span>🌴</span>
            <h3>Best Destinations</h3>
            <p>We bring you the most loved travel destinations worldwide.</p>
          </div>
          <div className="feature-card">
            <span>💰</span>
            <h3>Affordable Prices</h3>
            <p>Enjoy luxury travel without breaking the bank.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 TravelExplorer. All Rights Reserved.</p>
      </footer>
        </>
    )
}
