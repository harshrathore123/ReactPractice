import { use, useState } from 'react';
import './Singup.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Signup() {
  const [resdata,setResData] = useState("");
  const [userdata,setUserData] = useState({
    fullname:"",
    email:"",
    password:"",
    confirmpass:""
  })

  const submit = () =>{
    // console.log(userdata);
    axios.post('http://localhost:3000/api/register',userdata)
    .then(res=>{
      console.log(res.data)
      setResData(res.data);
      setUserData({
      fullname:"",
      email:"",
      password:"",
      confirmpass:""
    })
    })
    .catch(err=>console.log(err));

  
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
        {}
      </div>
    </>
  )
}