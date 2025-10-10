import './Login.css';
export default function Login(){
    return(
        <>
        <div class="login-box">
    <h2>Login</h2>
    <form action="/api/login" method="POST">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email"/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password"/>
      </div>
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="/api/signup">Sign Up</a></p>
  </div>
        </>
    )
}