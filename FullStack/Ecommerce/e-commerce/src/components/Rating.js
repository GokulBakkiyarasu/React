import React from "react";
import "../styles/rating.css";

const Ratings = (props) => {
  const { isSingleItem } = props;
  return (
    <div className="ratings">
      <i class="fa-solid fa-star" style={{ color: "#751fff" }}></i>
      <i class="fa-solid fa-star" style={{ color: "#751fff" }}></i>
      <i class="fa-solid fa-star" style={{ color: "#751fff" }}></i>
      <i class="fa-solid fa-star" style={{ color: "#751fff" }}></i>
      <i class="fa-solid fa-star" style={{ color: "#751fff" }}></i>{" "}
      {isSingleItem && <p> | 17</p>}
    </div>
  );
};

export default Ratings;
