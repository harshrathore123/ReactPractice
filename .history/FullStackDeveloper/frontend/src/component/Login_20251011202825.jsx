import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
export default function Login(){
  const [logindata,setLoginData] = useState({
    email:"",
    password:""
  })
    return(
        <>
        <div className="login-box">
    <h2>Login</h2>
      <div className="form-group">
        <label>Email</label>
        <input type="email" id="email" value={email} name="email" onChange={(e)=>setLoginData(...logindata,email:e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" id="password" name="password"/>
      </div>
      <button type="submit">Login</button>
    <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
  </div>
        </>
    )
}