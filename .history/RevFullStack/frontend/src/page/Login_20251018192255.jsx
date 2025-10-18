export default function Login(){
    return(
        <>
            <div className="login-container">
        <div className="login-card">
            <i className="fas fa-lock login-icon"></i>
            <h2>Sign In</h2>
            <p>Access your corporate travel management system</p>
            
                <div className="input-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="enter@email.com" required/>
                </div>
                
                <div className="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="••••••••" required/>
                </div>
                
                <div className="actions">
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
                
                <button type="submit" className="login-button">
                    Log In
                </button>
            
            <div className="signup-link">
                Don't have an account? <a href="#">Contact Support</a>
            </div>
        </div>
    </div>
        </>
    )
}