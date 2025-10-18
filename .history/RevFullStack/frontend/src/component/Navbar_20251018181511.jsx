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
                        <li>
                            <NavLink to="/" style={({isActive})=>(isActive?activeStyle:undefined)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutus"  style={({isActive})=>(isActive?activeStyle:undefined)}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/apartments" style={({isActive})=>(isActive?activeStyle:undefined)}>Apartments</NavLink>
                        </li>
                        <li>
                            <NavLink to="/amenities" style={({isActive})=>(isActive?activeStyle:undefined)}>Amenities</NavLink>
                        </li>
                        <li>
                            <NavLink to="/booking" style={({isActive})=>(isActive?activeStyle:undefined)}>Booking</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" style={({isActive})=>(isActive?activeStyle:undefined)}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" style={({isActive})=>(isActive?activeStyle:undefined)}>Contact Us</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
