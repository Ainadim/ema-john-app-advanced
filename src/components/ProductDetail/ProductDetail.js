import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData/products.json";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = fakeData.find((pd) => pd.id === productId);

  return (
    <div>
      <h2>Product Details</h2>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
