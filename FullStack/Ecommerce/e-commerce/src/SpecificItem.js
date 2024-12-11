import React from "react";
import NavBar from "./components/NavBar";
import SecondaryBar from "./components/SecondaryBar";
import ProductCard from "./components/ProductCard";
import Ratings from "./components/Rating";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import "./styles/specificitem.css";

const SpecificItem = () => {
  return (
    <div className="single page-container">
      <NavBar />
      <SecondaryBar />
      <div className="content single-item-content">
        <div className="product-content">
          <div className="left-prod-content">
            <ProductCard isSingleItem={true} />
          </div>
          <div className="right-prod-content">
            <h2 className="product-name">Product Name</h2>
            <Ratings isSingleItem={true} />
            <p>$85.00</p>
            <div className="quantity">
              <p>Quantity</p>
              <input type="number" value={1} />
            </div>
            <div>
              <a href="..." className="cart-btn">
                Add To cart
              </a>
              <a href="...">
                <i
                  class="fa-solid fa-heart-circle-plus fa-xl"
                  style={{ color: "#7523ff" }}
                ></i>
              </a>
            </div>
            <a href="..." className="buy-btn">
              Buy Now
            </a>
            <div className="info">
              <section>
                <h3>Product Info</h3>
                <p>
                  I'm a product description. This is a great place to "sell"
                  your product and grab buyers' attention. Describe your product
                  clearly and concisely. Use unique keywords.
                </p>
              </section>
              <section>
                <h3>Product Info</h3>
                <p>
                  I'm a product description. This is a great place to "sell"
                  your product and grab buyers' attention. Describe your product
                  clearly and concisely. Use unique keywords.
                </p>
              </section>
              <section>
                <h3>Product Info</h3>
                <p>
                  I'm a product description. This is a great place to "sell"
                  your product and grab buyers' attention. Describe your product
                  clearly and concisely.
                </p>
              </section>
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="left-sec">
            <h3>Reviews</h3>
            <Ratings isSingleItem={true} />
            <p>Based on 17 reviews</p>
          </div>
          <div className="right-sec">
            <select>
              <option disabled selected hidden>
                Sort by ratings
              </option>
              <option value="highest">Highest to Lowest</option>
              <option value="lowest">Lowest to Highest</option>
              <option value="mostReviews">Most Reviewed</option>
              <option value="leastReviews">Least Reviewed</option>
            </select>

            <select>
              <option disabled selected hidden>
                Sort by recents
              </option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        <h2>Comments</h2>
        <hr />
        <Comments />
      </div>
      <Footer />
    </div>
  );
};

export default SpecificItem;
