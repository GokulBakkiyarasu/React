import React from "react";
import NavBar from "./components/NavBar";
import SecondaryBar from "./components/SecondaryBar";
import Products from "./components/Products";
import Footer from "./components/Footer";

const WishList = () => {
  return (
    <div className="page-container">
      <NavBar />
      <SecondaryBar />
      <div className="content">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default WishList;
