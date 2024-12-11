import React from "react";
import NavBar from "./components/NavBar";
import SecondaryBar from "./components/SecondaryBar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./styles/home.css";

export default function Home() {
  return (
    <div className="page-container">
      <NavBar />
      <SecondaryBar />
      <div className="content">
        <Products />
        <div className="features">
          <div>
            <img
              src="https://ecommerce-design.my.canva.site/images/264fed85cfeab61ce41cbf02e21d6d65.png"
              height={64}
              width={83}
              alt="..."
            ></img>
            <p>Free Delivery on orders over $50</p>
          </div>

          <div>
            <img
              src="https://ecommerce-design.my.canva.site/images/4e886e0b5b34f62ff3183b58b9d4e5f2.svg"
              height={64}
              width={83}
              alt="..."
            ></img>
            <p>Low prices guaranteed</p>
          </div>

          <div>
            <img
              src="https://ecommerce-design.my.canva.site/images/2ed176ea598042788b4c17995131abb2.svg"
              height={64}
              width={83}
              alt="..."
            ></img>
            <p>Available to you 24/7</p>
          </div>

          <div>
            <img
              src="https://ecommerce-design.my.canva.site/images/97a8b5a24845f20f6fff937b34c70b0a.svg"
              height={64}
              width={83}
              alt="..."
            ></img>
            <p>Easy Return Policy</p>
          </div>
        </div>
        <h2 className="brands-title">Brands</h2>
        <div className="brands-section">
          <div className="brand">
            <h3 style={{ fontFamily: "DM Serif Display" }}>Horizon</h3>
          </div>
          <div className="brand">
            <h3
              style={{
                fontFamily: "SF Florencesans",
              }}
            >
              Netplay
            </h3>
          </div>
          <div className="brand">
            <h3 style={{ fontFamily: "Moonstrike" }}>PJK</h3>
          </div>
          <div className="brand">
            <h3
              style={{
                fontFamily: "Big River Script Sample",
                marginBottom: "2px",
              }}
            >
              Roadster
            </h3>
          </div>
          <div className="brand">
            <h3 style={{ fontFamily: "Marhey" }}>Zodiac</h3>
          </div>
          <div className="brand">
            <h3 style={{ fontFamily: "Tourney" }}>Zoro</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
