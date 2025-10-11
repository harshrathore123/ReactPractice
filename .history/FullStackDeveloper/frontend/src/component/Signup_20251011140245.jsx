import { useState } from 'react';
import './Singup.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function Signup() {
  const [userdata,setUserData] = useState({
    fullname:"",
    email:"",
    password:"",
    confirmpass:""
  })

const submit = () => {
  axios.post('http://localhost:3000/api/register', userdata)
    .then(res => {
      // ✅ Show success message from backend
      toast.success(res.data.msg);
      // ✅ Clear form
      setUserData({
        fullname: "",
        email: "",
        password: "",
        confirmpass: ""
      });
    })
    .catch(err => {
      // ✅ Show error message from backend if available
      toast.error(err.res?.data?.msg || "Something went wrong!");
    });
}

  return (
    <>
      <div className="signup-box">
        <h2>Create Account</h2>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value={userdata.fullname} onChange={(e)=>setUserData({...userdata,fullname: e.target.value})} />
            {/* <mark>{userdata.fullname}</mark> */}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" value={userdata.email} onChange={(e)=>setUserData({...userdata,email:e.target.value})} />
            {/* <mark>{userdata.email}</mark> */}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" value={userdata.password} onChange={(e)=>setUserData({...userdata,password:e.target.value})} />
            {/* <mark>{userdata.password}</mark> */}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" value={userdata.confirmpass} onChange={(e)=>setUserData({...userdata,confirmpass:e.target.value})} />
            {/* <mark>{userdata.confirmpass}</mark> */}
          </div>
          <button onClick={submit}>Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </>
  )
}