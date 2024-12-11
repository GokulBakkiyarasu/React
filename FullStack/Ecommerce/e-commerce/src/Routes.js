import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CategoryPurchase from "./CategoryPurchase";
import SpecificItem from "./SpecificItem";
import SignIn from "./SignIn";
import Signup from "./Signup";
import Cart from "./Cart";
import WishList from "./WishList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category_name" element={<CategoryPurchase />} />
      <Route path="/:category/:product" element={<SpecificItem />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishList />} />
    </Routes>
  );
};

export default AppRoutes;
