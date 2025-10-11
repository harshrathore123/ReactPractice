import './Login.css';
export default function Login(){
    return(
        <>
        <div className="login-box">
    <h2>Login</h2>
      <div className="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email"/>
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password"/>
      </div>
      <button type="submit">Login</button>
    <p>Don't have an account? <a href="/api/signup">Sign Up</a></p>
  </div>
        </>
    )
}