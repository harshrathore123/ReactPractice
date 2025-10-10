import './Singup.css';
export default function Signup() {
  return (
    <>
      <div class="signup-box">
        <h2>Create Account</h2>
        <form action="/api/signup" method="POST">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="fullname" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm_password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/api/login">Login</a></p>
      </div>
    </>
  )
}