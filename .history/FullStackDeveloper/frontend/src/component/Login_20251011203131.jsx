import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Login(){
  const [logindata,setLoginData] = useState({
    email:"",
    password:""
  })

  const login_send = () =>{
    axios.post('http://localhost:3000/api/login',logindata).
    then(res=>console.log(res.data)).
    catch(err=>console.log(err));
  }
    return(
        <>
        <div className="login-box">
    <h2>Login</h2>
      <div className="form-group">
        <label>Email</label>
        <input type="email" id="email" value={email} name="email" onChange={(e)=>setLoginData({...logindata,email:e.target.value})}/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" id="password" name="password" value={password} onChange={(e)=>setLoginData({...logindata,password:e.target.value})}/>
      </div>
      <button onClick={login_send}>Login</button>
    <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
  </div>
        </>
    )
}