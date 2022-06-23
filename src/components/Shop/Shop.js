import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData/products.json";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productId = Object.keys(saveCart);
    const previousId = productId.map((id) => {
      const product = fakeData.find((pd) => pd.id === id);
      product.quantity = saveCart[id];
      return product;
    });
    setCart(previousId);
  }, []);

  useEffect(() => {
    setProducts(fakeData);
  }, []);

  const handleAddProduct = (product) => {
    const toBeAddedId = product.id;
    const sameProduct = cart.find((pd) => pd.id === toBeAddedId);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.id !== toBeAddedId);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDatabaseCart(product.id, count);
  };

  // const handleAddProduct = (product) => {
  //   const newCart = [...cart, product];
  //   setCart(newCart);
  //   const sameProduct = newCart.filter((pd) => pd.id === product.id);
  //   const count = sameProduct.length;
  //   addToDatabaseCart(product.id, count);
  // };

  return (
    <div className="twin-container">
      <div className="product-container">
        <ul>
          {products.map((product) => (
            <Product
              key={product.id}
              showAddToCart={true}
              handleAddProduct={handleAddProduct}
              product={product}
            ></Product>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="main-button">Add to Review</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
