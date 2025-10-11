import './Login.css';
import { Link } from 'react-router-dom';
export default function Login(){
    return(
        <>
        <div className="login-box">
    <h2>Login</h2>
      <div className="form-group">
        <label>Email</label>
        <input type="email" id="email" name="email"/>
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