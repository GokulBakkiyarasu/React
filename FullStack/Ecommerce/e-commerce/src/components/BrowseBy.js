import React from "react";
import { Link } from "react-router-dom";
import "../styles/browser.css";

const BrowseBy = () => {
  return (
    <div className="browser">
      <h2>Browse by</h2>
      <hr />
      <div className="category">
        <Link to="/...">All Items</Link>
        <Link to="/...">Category 1</Link>
        <Link to="/...">Category 2</Link>
        <Link to="/...">Category 3</Link>
        <Link to="/...">Category 4</Link>
        <Link to="/...">Category 5</Link>
        <Link to="/...">Sales</Link>
      </div>

      <div className="filter">
        <hr />
        <h2>Filter by</h2>
        <p>Price</p>
        <div className="range">
          <p>100</p>
          <p>1000</p>
        </div>
        <form>
          <input
            type="range"
            min="1"
            max="100"
            value="1"
            class="slider"
            id="myRange"
          />
        </form>
        <hr />
      </div>
    </div>
  );
};

export default BrowseBy;
