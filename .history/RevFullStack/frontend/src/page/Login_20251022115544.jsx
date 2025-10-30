import { NavLink } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Login({setIsAuthenticated}){
    const [userLogin,setTravelUserLogin] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const traveluserLoggedIn = () =>{
        axios.post('http://localhost:3000/travel/travelUserLogin',{userLogin}).
        then((res)=>{
            toast.success(res.data.msg);
            
            // ✅ Only navigate if login is successful
        if (res.data.msg === "Successfully Login") {
          navigate('/');
          localStorage.setItem('isLoggedin',true);
            setIsAuthenticated(true);
        }
        }).
        catch((err)=>{
            toast.error(err.response?.data?.msg);
        })
        
    }
    return(
        <>
            <div className="login-container">
        <div className="login-card">
            <i className="fas fa-lock login-icon"></i>
            <h2>Sign In</h2>
            <p>Access your corporate travel management system</p>
            
                <div className="input-group">
                    <label for="email">Email Address</label>
                    <input 
                    value={userLogin.email}
                    onChange={(e)=>setTravelUserLogin({...userLogin,email:e.target.value})}
                    type="email" id="email" name="email" placeholder="enter@email.com" required/>
                </div>
                
                <div className="input-group">
                    <label for="password">Password</label>
                    <input 
                    value={userLogin.password}
                    onChange={(e)=>setTravelUserLogin({...userLogin,password:e.target.value})}
                    type="password" id="password" name="password" placeholder="••••••••" required/>
                </div>
                
                <div className="actions">
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
                
                <button onClick={traveluserLoggedIn} type="submit" className="login-button">
                    Log In
                </button>
            
            <div className="signup-link">
                Don't have an account? <NavLink to="/register">Singup</NavLink>
            </div>
        </div>
    </div>
        </>
    )
}