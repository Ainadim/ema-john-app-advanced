import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, img, seller, stock, price, id } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-name">
        <h3>
          <Link to={"/product/" + id}>{name}</Link>
        </h3>
        <p>
          <small> Seller name: {seller}</small>
        </p>
        <p>
          <small> Only left in stock {stock}</small>
        </p>
        <h4>Price $ {price}</h4>
        {props.showAddToCart === true && (
          <button
            className="main-button"
            onClick={() => {
              props.handleAddProduct(props.product);
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faCartArrowDown} /> Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
