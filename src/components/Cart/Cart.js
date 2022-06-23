import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const productTotal = cart.reduce(
    (sum, pd) => sum + pd.price * pd.quantity,
    0
  );

  let shippingCost = 0;
  if (productTotal > 5000) {
    shippingCost = 0;
  } else if (productTotal > 2000) {
    shippingCost = 20;
  } else if (productTotal > 500) {
    shippingCost = 34;
  } else if (productTotal > 0) {
    shippingCost = 45;
  }

  const tax = productTotal / 10;
  const total = productTotal + shippingCost + tax;

  return (
    <div className="cart-info">
      <h3>Order Summary</h3>
      <h3>Add cart {cart.length} items</h3>
      <h3> Product Total $ {productTotal}</h3>
      <h3> Shipping Cost $ {shippingCost}</h3>
      <h3> Tax $ {tax}</h3>
      <h3>Total $ {total}</h3>
      {props.children}
    </div>
  );
};

export default Cart;
