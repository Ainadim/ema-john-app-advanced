import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, quantity, id, price } = props.product;
  return (
    <div className="reviewItemStyle">
      <h2 className="">Name: {name}</h2>
      <p>Quantity: {quantity}</p>
      <h3> Per Product Price: $ {price}</h3>
      <br />
      <button className="main-button" onClick={() => props.removeCart(id)}>
        Remove Item
      </button>
    </div>
  );
};

export default ReviewItem;
