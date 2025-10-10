import './Singup.css';
export default function Signup(){
    return(
        <>
          <div class="signup-box">
    <h2>Create Account</h2>
    <form action="/api/signup" method="POST">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="fullname">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email"/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password"/>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm_password"/>
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <p>Already have an account? <a href="/api/login">Login</a></p>
  </div>
        </>
    )
}

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Signup Page</title>
  <style>
    body{
      font-family: Arial, sans-serif;
      background: url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1470&q=80') no-repeat center center/cover;
      display:flex;justify-content:center;align-items:center;height:100vh;
      margin:0;
      padding:20px;
    }
    .signup-box{
      background: rgba(255, 255, 255, 0.3);
      padding:30px;
      border-radius:15px;
      box-shadow:0 8px 24px rgba(0,0,0,0.15);
      width:100%;
      max-width:400px;
      min-width:280px;
      backdrop-filter: blur(12px);
      transition: all 0.3s ease;
    }
    .signup-box h2{
      margin-bottom:20px;
      text-align:center;
      color:#1f2937;
    }
    .signup-box .form-group{
      margin-bottom:15px;
    }
    .signup-box label{
      display:block;
      margin-bottom:6px;
      font-size:14px;
      color:#334155;
    }
    .signup-box input{
      width:100%;
      padding:10px;
      border:1px solid #cbd5e1;
      border-radius:8px;
      font-size:14px;
    }
    .signup-box input:focus{
      border-color:#7b61ff;
      outline:none;
      box-shadow:0 0 8px rgba(123,97,255,0.3);
    }
    .signup-box button{
      width:100%;
      padding:12px;
      background:linear-gradient(90deg,#7b61ff,#1f9bd3);
      color:white;
      font-size:16px;
      border:none;
      border-radius:8px;
      cursor:pointer;
      transition: background 0.3s ease;
    }
    .signup-box button:hover{
      background:linear-gradient(90deg,#5c46c9,#1373b7);
    }
    .signup-box p{
      margin-top:15px;
      text-align:center;
      font-size:14px;
      color:#1f2937;
    }
    .signup-box p a{
      color:#7b61ff;
      text-decoration:none;
    }
    .signup-box p a:hover{
      text-decoration:underline;
    }
    @media(max-width:320px){
      .signup-box{padding:20px;}
      .signup-box h2{font-size:18px;}
      .signup-box button{font-size:14px;padding:10px;}
    }
  </style>
</head>
<body>

</body>
</html>