import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <>
              {/* Header Section */}
      <header>
        <div className="navbar-container">
          <h1 className="logo">TravelExplorer</h1>

          <nav>
            <a href="#">Home</a>
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