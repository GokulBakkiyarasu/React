import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./styles/signin.css";

const SignIn = () => {
  return (
    <div className="page-container">
      <NavBar isSign={true} />
      <div className="content login-container">
        <div className="signin-box">
          <h2>Sign In</h2>
          <p>Stay updated on your tech world</p>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Email or Phone" required />
            </div>
            <div className="input-group password-group">
              <input
                type="password"
                placeholder="Password"
                id="password"
                required
              />
              <span className="show-password">Show</span>
            </div>
            <a href="..." className="forgot-password">
              Forgot Password
            </a>
            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </form>
          <div className="separator">
            <hr className="thin-hr" />
            <span>or</span>
            <hr className="thin-hr" />
          </div>
          <button className="other-signin-btn">
            Sign In with Other Account
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
