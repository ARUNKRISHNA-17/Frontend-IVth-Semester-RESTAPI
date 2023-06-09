import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background.jpg";
import "../styles/Home.css";
import {motion} from 'framer-motion';
function Home() {
  return (
    <>
    <motion.div className="home" style={{ backgroundImage: `url(${BannerImage})` }}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}   
    >
      <div className="headerContainer">
        <h1>Laptop Store</h1>
        <p>We have what you desire</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </motion.div>
    </>
  );
}

export default Home;