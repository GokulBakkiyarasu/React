import React from "react";
import NavBar from "./components/NavBar";
import SecondaryBar from "./components/SecondaryBar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import "./styles/summary.css";

const Cart = () => {
  return (
    <div className="page-container">
      <NavBar />
      <SecondaryBar />
      <div className="content">
        <div className="summary">
          <section className="left-summary-section">
            <h2 style={{ display: "inline" }}>Product Checkout</h2>
            <hr className="product-summary-hr" />
            <div className="product-summary">
              <div className="product-info">
                <ProductCard isSummaryPage={true} />
                <div className="prod-info">
                  <h3>Product Name</h3>
                  <p>$85.00</p>
                </div>
              </div>

              <div className="prod-quant">
                <div>
                  <h3>Quantity</h3>
                  <input type="number" value={1} />
                </div>
                <a href="...">
                  <i
                    class="fa-solid fa-trash fa-xl"
                    style={{ color: "#7523ff" }}
                  ></i>
                </a>
              </div>
            </div>
            <hr className="product-summary-hr" />
          </section>

          <section>
            <h2>Order Summary</h2>
            <hr className="price-summary-hr" />
            <div className="price-summary">
              <div className="subtotal">
                <h3>Subtotal</h3>
                <h3 style={{ color: "black" }}>$85.00</h3>
              </div>
              <a href="...">Estimated Delivery</a>
            </div>
            <hr className="price-summary-hr" />
            <div className="total">
              <h3>Total</h3>
              <h3 style={{ color: "black" }}>$85.00</h3>
            </div>
            <a href="..." className="card-btn place-order">
              Place Order
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
