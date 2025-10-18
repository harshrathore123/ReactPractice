import { useState } from 'react';
import './Signup.css';
import {toast} from 'react-toastify';
import { Link, NavLink } from 'react-router-dom';
export default function Signup(){
    const [userdata,setUserData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirm_password:"",
        city:"",
        age:0        
    })
    const addUserdata = ()=>{
        localStorage.setItem('userData',JSON.stringify(userdata));
        console.log(userdata);
        toast.success("Data Saved Successfully");

        setUserData({
            firstname:"",
            lastname:"",
            age:0,
            city:"",
            email:"",
            password:"",
            confirm_password:""
        })
    }
    return(
        <>

    <div className="login-container">
        <div className="login-card">
            <i className="fas fa-user-plus login-icon"></i>
            <h2>Create Profile</h2>
            <p>Complete your registration to manage your travel bookings</p>
            
                
                <div className="name-group">
                    <div className="input-group">
                        <label>First Name</label>
                        <input 
                        value={userdata.firstname}
                        onChange={(e)=>setUserData({...userdata,firstname:e.target.value})}
                        type="text" id="firstname" name="firstname" placeholder="Jane" required/>
                    </div>
                    <div className="input-group">
                        <label>Last Name</label>
                        <input 
                        value={userdata.lastname}
                        onChange={(e)=>setUserData({...userdata,lastname:e.target.value})}
                        type="text" id="lastname" name="lastname" placeholder="Doe" required/>
                    </div>
                </div>

                <div className="input-group">
                    <label>Work Email</label>
                    <input 
                    value={userdata.email}
                    onChange={(e)=>setUserData({...userdata,email:e.target.value})}
                    type="email" id="email" name="email" placeholder="work@company.com" required/>
                </div>
                
                <div className="input-group">
                    <label>Password</label>
                    <input 
                    value={userdata.password}
                    onChange={(e)=>setUserData({...password,password:e.target.value})}
                    type="password" id="password" name="password" placeholder="••••••••" required/>
                </div>

                <div className="input-group">
                    <label>Confirm Password</label>
                    <input 
                    value={userdata.confirm_password}
                    onChange={(e)=>setUserData({...userdata,confirm_password:e.target.value})}
                    type="password" id="confirmpassword" name="confirmpassword" placeholder="••••••••" required/>
                </div>
                
                <div className="details-group">
                    <div className="input-group">
                        <label>City/Base Location</label>
                        <input 
                        value={userdata.city}
                        onChange={(e)=>setUserData({...userdata,city:e.target.value})}
                        type="text" id="city" name="city" placeholder="New York" required/>
                    </div>

                    <div className="input-group input-age">
                        <label>Age</label>
                        <input 
                        value={userdata.age}
                        onChange={(e)=>setUserData({...userdata,age:e.target.value})}
                        type="number" id="age" name="age" placeholder="30" min="18" max="100" required/>
                    </div>
                </div>
                
                <button type="submit" className="login-button" onClick={addUserdata}>
                    Complete Registration
                </button>
            
            <div className="signup-link">
                Already registered? 
                <NavLink to="/login">Sign In Here</NavLink>
            </div>
        </div>
    </div>
        </>
    )
}