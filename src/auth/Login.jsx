import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="image-section"></div>
      <div className="form-section">
        <h2>Log in</h2>
        <form action="#" method="POST">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log-in</button>
        </form>

        <div className="social-login">
          <button>
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
            />
            Sign in with Google
          </button>
          <button>
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
            />
            Sign in with Facebook
          </button>
        </div>

        <div className="alternate-action">
          Don't have an account?  <Link to="/Signup">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
