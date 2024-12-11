import React from "react";
import ProductCard from "./ProductCard";
import "../styles/products.css";

const Products = () => {
  return (
    <div className="products">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;
