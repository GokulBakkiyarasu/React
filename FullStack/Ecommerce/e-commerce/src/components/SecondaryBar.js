import React from "react";
import { Link } from "react-router-dom";
import "../styles/secondarybar.css";

const SecondaryBar = () => {
  return (
    <div className="secondary-bar">
      <Link to="/...">All Items</Link>
      <Link to="/...">Category 1</Link>
      <Link to="/...">Category 2</Link>
      <Link to="/...">Category 3</Link>
      <Link to="/...">Category 4</Link>
      <Link to="/...">Category 5</Link>
      <Link to="/...">Sales</Link>
    </div>
  );
};

export default SecondaryBar;
