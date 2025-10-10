import './Singup.css';
export default function Signup() {
  return (
    <>
      <div className="signup-box">
        <h2>Create Account</h2>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" id="name" name="fullname" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm_password" />
          </div>
          <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/api/login">Login</a></p>
      </div>
    </>
  )
}