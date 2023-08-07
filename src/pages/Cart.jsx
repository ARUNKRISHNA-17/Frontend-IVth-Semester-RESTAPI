import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Products } from "../Products";
import { CartItems } from "./CartItems";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';

import "../styles/Cart.css";
import { toast } from "react-toastify";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    navigate('/');
    toast.success("Product Ordered");
    toast.success("The product will be delivered to your doorstep");
  };

  return (
    <>
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >


    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="total"> Subtotal: Rs.{totalAmount} </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button onClick={handleSubmit}
          >{" "}Checkout{" "}</button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
        )}
    </div>
        </motion.div>
        </>
  );
};
