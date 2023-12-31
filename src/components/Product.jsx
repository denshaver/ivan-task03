import React from "react";

const Product = ({ img, title, price, isAgeRestricted }) => {
  return (
    <div className="product age-restr">
      {isAgeRestricted && <span className="restrictment-age-label">18+</span>}
      <img src={img} alt="product" />
      <h2>{title}</h2>
      <b>{price}$</b>
      <button>Add to cart</button>
      <div className="modal">
        <p>Are you 18+?</p>
        <button>Yes</button>
      </div>
    </div>
  );
};

export default Product;
