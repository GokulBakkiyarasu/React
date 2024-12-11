import React from "react";
import NavBar from "./components/NavBar";
import SecondaryBar from "./components/SecondaryBar";
import BrowseBy from "./components/BrowseBy";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./styles/specificproduct.css";

const CategoryPurchase = () => {
  return (
    <div className="page-container">
      <NavBar />
      <SecondaryBar />
      <div className="content specific-products-content">
        <BrowseBy />
        <div>
          <Products />
          <Products />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPurchase;
