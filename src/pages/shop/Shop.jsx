import React from "react";
import { Products } from "../../Products";
import { Product } from "./Product";
import "../../styles/shop.css";
import {motion} from 'framer-motion';

export const Shop = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>

    <div className="shop">
      <div className="shopTitle">
        <h1>Our Products</h1>
      </div>

      <div className="products">
        {Products.map((product) => (
          <Product data={product} />
          ))}
      </div>
    </div>
  </motion.div>
  );
};