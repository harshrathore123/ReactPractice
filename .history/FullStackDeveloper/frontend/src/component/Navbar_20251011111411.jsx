export default function Navbar(){
    return(
        <>
              {/* Header Section */}
      <header>
        <div className="navbar-container">
          <h1 className="logo">TravelExplorer</h1>

          <nav>
            <a href="#">Home</a>
            <a href="#">Destinations</a>
            <a href="#">Packages</a>
            <a href="#">Contact</a>
          </nav>

          <div className="auth-buttons">
            <button className="btn-primary">
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="btn-secondary">
              <Link to={"/signup"}>Sign Up</Link>
            </button>
          </div>
        </div>
      </header>
        </>
    )
}