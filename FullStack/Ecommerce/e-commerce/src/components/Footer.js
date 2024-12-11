import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="store-location">
          <h3>Store Location</h3>
          <p>
            500 Terry Francine Street San Francisco, CA 94158 info@mysite.com
            123-456-7890
          </p>
          <div className="social-media">
            <a href="...">
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a href="...">
              <i class="fa-brands fa-twitter fa-lg"></i>
            </a>
            <a href="...">
              <i class="fa-brands fa-facebook fa-lg"></i>
            </a>
          </div>
        </div>
        <div className="shop">
          <h3>Shop</h3>
          <Link to="/...">Shop All</Link>
          <Link to="/...">Category1</Link>
          <Link to="/...">Category2</Link>
          <Link to="/...">Category3</Link>
          <Link to="/...">Category4</Link>
          <Link to="/...">Category5</Link>
        </div>
        <div className="customer-support">
          <h3>Customer Support</h3>
          <Link to="/...">Contact Us</Link>
          <Link to="/...">About Us</Link>
          <Link to="/...">Help Center</Link>
          <Link to="/...">Careers</Link>
        </div>

        <div className="policy">
          <h3>Policy</h3>
          <Link to="/...">Shipping & Returns</Link>
          <Link to="/...">Terms & Conditions</Link>
          <Link to="/...">Payment Methods</Link>
          <Link to="/...">FAQ</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          <i class="fa-regular fa-copyright" /> 2035 by Company Name
        </p>
      </div>
    </div>
  );
};

export default Footer;
