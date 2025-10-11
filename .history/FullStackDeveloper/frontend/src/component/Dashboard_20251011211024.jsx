import './Dashboard.css'
import { Link } from 'react-router-dom'
export default function Dashboard(){
    return(
        <>
        {/* <!-- Navbar --> */}
    <header>
        <div className="navbar-container">
          <h1 className="logo">TravelExplorer</h1>
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Destinations</Link>
            <Link to={"/"}>Packages</Link>
            <Link to={"/"}>Contact</Link>
          </nav>
          <button className="logout-btn">
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              Logout
            </Link>
          </button>
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
          <h2>Discover The World 🌍</h2>
          <p>
            Unforgettable experiences, beautiful destinations, and the best travel deals just for
            you.
          </p>
          <button className="hero-btn">Start Your Journey</button>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="popular-section">
        <h2>Popular Destinations</h2>
        <div className="destination-grid">
          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1526779259212-939e64784ebc?auto=format&fit=crop&w=800&q=80" />
            <div className="content">
              <h3>Paris, France</h3>
              <p>The city of love with rich history and culture.</p>
            </div>
          </div>

          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80" />
            <div className="content">
              <h3>Bali, Indonesia</h3>
              <p>Tropical paradise with beaches, temples & culture.</p>
            </div>
          </div>

          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80" />
            <div className="content">
              <h3>New York, USA</h3>
              <p>The city that never sleeps, full of excitement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="offer-section">
        <h2>Special Offer ✈️</h2>
        <p>
          Book your dream vacation today and get <span style={{ fontWeight: "600" }}>20% OFF</span> on
          all travel packages.
        </p>
        <button className="offer-btn">Grab the Deal</button>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 TravelExplorer. All Rights Reserved.</p>
      </footer>
        </>
    )
}