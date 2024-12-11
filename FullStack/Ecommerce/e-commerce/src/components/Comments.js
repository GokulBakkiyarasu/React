import React from "react";
import Ratings from "./Rating";

const Comments = () => {
  return (
    <div className="comment">
      <h5>Username • Apr 22, 2022</h5>
      <Ratings />
      <p className="comment-desc">Support your local business!</p>
      <p className="comment-content">
        This product is awesome - good quality and the materials are local. Wish
        there were more sites like this one that sold handcrafted products. Will
        definitely buy it again!
      </p>
    </div>
  );
};

export default Comments;
