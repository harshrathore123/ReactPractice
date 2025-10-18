import '../../public/css/style.css';
import '../../public/css/hover-style.css';
import { Link, Navigate } from 'react-router-dom';
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
                            <NavLink to="/" style={({isActive})=>(isActive?activeStyle:undefined)}>Home</NavLink>
                        </li>
                        <li>
                            <Navigate to="/aboutus"  style={({isActive})=>(isActive?activeStyle:undefined)}>About Us</Navigate>
                        </li>
                        <li>
                            <Navigate to="/apartments" style={({isActive})=>(isActive?activeStyle:undefined)}>Apartments</Navigate>
                        </li>
                        <li>
                            <Navigate to="/amenities" style={({isActive})=>(isActive?activeStyle:undefined)}>Amenities</Navigate>
                        </li>
                        <li>
                            <Navigate to="/booking" style={({isActive})=>(isActive?activeStyle:undefined)}>Booking</Navigate>
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
