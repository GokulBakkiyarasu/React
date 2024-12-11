import React from "react";
import Ratings from "./Rating";
import { Link } from "react-router-dom";
import "../styles/product card.css";

const ProductCard = (props) => {
  const { isSingleItem, isSummaryPage } = props;
  return (
    <div
      className={`card ${isSingleItem && "single-item-card"}  ${
        isSummaryPage && "summary-page"
      }`}
    >
      <div className="card-image">
        <img
          src="https://ecommerce-design.my.canva.site/images/eacec6a892ad0d4ef3793da3ca10b39e.svg"
          alt="..."
          height={100}
          width={100}
        ></img>
      </div>
      {isSingleItem || isSummaryPage ? (
        ""
      ) : (
        <div className="card-body">
          <h3 className="card-title">Card title</h3>
          <div className="price-section">
            <p className="card-text original">
              <i class="fa-solid fa-dollar-sign"></i>10
            </p>
            <p className="card-text discount">
              &nbsp; &nbsp;<i class="fa-solid fa-dollar-sign"></i>10
            </p>
          </div>

          <Ratings isSingleItem={isSingleItem} />

          <Link href="..." className="card-btn">
            Add to cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
