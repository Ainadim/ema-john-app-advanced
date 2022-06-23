import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData/products.json";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import happyImage from "../../images/giphy.gif";
import "./Review.css";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlace, setOrderPlace] = useState(false);

  const handlePlaceOrder = () => {
    console.log(" worked");
    setCart([]);
    setOrderPlace(true);
    processOrder();
  };

  const removeCart = (productId) => {
    const newCart = cart.filter((pd) => pd.id !== productId);
    setCart(newCart);
    removeFromDatabaseCart(productId);
  };

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);

    const cartProduct = productKeys.map((id) => {
      const product = fakeData.find((pd) => pd.id === id);
      product.quantity = saveCart[id];
      return product;
    });
    setCart(cartProduct);
  }, []);

  let thankYou;
  if (orderPlace) {
    thankYou = <img src={happyImage} alt="" />;
  }

  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            key={pd.id}
            product={pd}
            removeCart={removeCart}
          ></ReviewItem>
        ))}

        <div className="thank-you">{thankYou}</div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="main-button">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
