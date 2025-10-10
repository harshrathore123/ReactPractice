import { useState } from 'react';
import './Singup.css';
export default function Signup() {
  const [userdata,setUserData] = useState({
    fullname:"",
    email:"",
    password:"",
    confirmpass:""
  })
  return (
    <>
      <div className="signup-box">
        <h2>Create Account</h2>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" onChange={(e)=>setUserData({...userdata,fullname: e.target.value})} />
            <mark>{userdata.fullname}</mark>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" onChange={(e)=>setUserData({...userdata,email:e.target.value})} />
            <mark>{userdata.email}</mark>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" onChange={(e)=>({...userdata,password:e.target.value})} />
            <mark>{userdata.password}</mark>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" onChange={(e)=>({...userdata,confirmpass:e.target.value})} />
            <mark>{userdata.confirmpass}</mark>
          </div>
          <button onClick={submit}>Sign Up</button>
        <p>Already have an account? <a href="#">Login</a></p>
      </div>
    </>
  )
}