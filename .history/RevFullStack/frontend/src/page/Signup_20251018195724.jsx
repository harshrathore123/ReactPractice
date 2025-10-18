import { useState } from 'react';
import './Signup.css';
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
                        <input type="text" id="firstname" name="firstname" placeholder="Jane" required/>
                    </div>
                    <div className="input-group">
                        <label>Last Name</label>
                        <input type="text" id="lastname" name="lastname" placeholder="Doe" required/>
                    </div>
                </div>

                <div className="input-group">
                    <label>Work Email</label>
                    <input type="email" id="email" name="email" placeholder="work@company.com" required/>
                </div>
                
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" id="password" name="password" placeholder="••••••••" required/>
                </div>

                <div className="input-group">
                    <label>Confirm Password</label>
                    <input type="password" id="confirmpassword" name="confirmpassword" placeholder="••••••••" required/>
                </div>
                
                <div className="details-group">
                    <div className="input-group">
                        <label>City/Base Location</label>
                        <input type="text" id="city" name="city" placeholder="New York" required/>
                    </div>
                    <div className="input-group input-age">
                        <label>Age</label>
                        <input type="number" id="age" name="age" placeholder="30" min="18" max="100" required/>
                    </div>
                </div>
                
                <button type="submit" className="login-button">
                    Complete Registration
                </button>
            
            <div className="signup-link">
                Already registered? <a href="./Signup.jsx">Sign In Here</a>
            </div>
        </div>
    </div>
        </>
    )
}