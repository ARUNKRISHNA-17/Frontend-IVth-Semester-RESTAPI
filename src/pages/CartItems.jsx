import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {motion} from 'framer-motion';

export const CartItems = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <>
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      
    <div className="cartItem">
      <img src={productImage}  />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: Rs.{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
            </motion.div>
            </>
  );
};