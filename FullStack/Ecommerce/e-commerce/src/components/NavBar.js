import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = (props) => {
  const { isSign } = props;
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to={"/"}>
          <h1 className="company-name">Company Name</h1>
        </Link>
        {isSign ? (
          ""
        ) : (
          <form>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" />
          </form>
        )}
      </div>

      {isSign ? (
        ""
      ) : (
        <div className="navbar-right">
          <div className="login-section">
            <i class="fa-solid fa-user " />
            <Link to="/signin">Login</Link> / <Link to="signup">Sign Up</Link>
          </div>
          <Link to="/wishlist">
            <i class="fa-duotone fa-solid fa-heart fa-xl"></i>
          </Link>
          <Link to="/">
            <i class="fa-solid fa-cart-shopping fa-xl"></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
