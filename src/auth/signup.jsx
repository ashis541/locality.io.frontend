import React from "react";
import { Link } from "react-router-dom";
const signup = () => {
  return (
    <div className="container">
      <div className="image-section"></div>
      <div className="form-section">
        <h2>Sign Up</h2>
        <form action="#" method="POST">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>

        <div className="social-login">
          <button>
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
            />
            Sign up with Google
          </button>
          <button>
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
            />
            Sign up with Facebook
          </button>
        </div>

        <div className="alternate-action">
          Already have an account?  <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default signup;
