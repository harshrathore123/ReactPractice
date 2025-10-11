import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
export default function Login() {
  const [logindata, setLoginData] = useState({
    email: "",
    password: ""
  })

  const login_send = () => {
    axios.post('http://localhost:3000/api/login', logindata).
      then(res => {
        console.log(res.data)
        toast.success(res.data.msg);
        localStorage.setItem('isLoggedin','true')
        setLoginData({
          email: "",
          password: ""
        })
      }).
      catch(err => {
        console.log(err)
        toast.error(err.response?.data?.msg)
      })
  }
  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input type="email" id="email" value={logindata.email} name="email" onChange={(e) => setLoginData({ ...logindata, email: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" id="password" name="password" value={logindata.password} onChange={(e) => setLoginData({ ...logindata, password: e.target.value })} />
        </div>
        <button onClick={login_send}>Login</button>
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
      </div>
    </>
  )
}