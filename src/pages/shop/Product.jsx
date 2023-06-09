import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id] || 0;

  return (
    <div className="product">
      <img src={productImage} alt="prdtimg" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Rs.{price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
