import '../../public/css/style.css';
import '../../public/css/hover-style.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const activeStyle = {
        color:"white"
    }
    return (
        <>
            {/* <!-- Header Section Start --> */}
            <header id="header">
                <NavLink to="/" className="logo">
                    <img src="img/logo.png" alt="logo" />
                </NavLink>
                <div className="phone">
                    <i className="fa fa-phone"></i>+1 234 567 8900
                </div>
                <div className="mobile-menu-btn">
                    <i className="fa fa-bars"></i>
                </div>
                <nav className="main-menu top-menu">
                    <ul>
                        <li className="active">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <Link to="/aboutus">About Us</Link>
                        </li>
                        <li>
                            <Link to="/apartments">Apartments</Link>
                        </li>
                        <li>
                            <Link to="/amenities">Amenities</Link>
                        </li>
                        <li>
                            <Link to="/booking">Booking</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
