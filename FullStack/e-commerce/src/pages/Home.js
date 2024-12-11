import React from "react";
import PrimaryAppBar from "../components/Navbar";
import SecondaryAppBar from "../components/SecondaryBar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="page-container">
      <section>
        <PrimaryAppBar />
        <SecondaryAppBar />
      </section>
      <div className="page-content">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}
