import React from "react";
import MultiplePizzas from "../assets/about.jpg";
import "../styles/About.css";
import {motion} from 'framer-motion';

function About() {
  return (
    <motion.div className="about"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to our Laptop Store! We are a dedicated team of tech enthusiasts
        passionate about providing the best laptops and accessories to our
        customers.
      </p>
      <p>
        At Laptop Store, we believe in offering a wide range of high-quality
        laptops from top brands to cater to various needs and budgets. Whether
        you're a student, professional, or a gaming enthusiast, we have the
        perfect laptop for you.
      </p>
      <p>
        We understand that buying a laptop is an important decision, and we're
        here to help you make the right choice. Our knowledgeable staff is
        ready to assist you with any questions you may have, providing
        personalized advice and recommendations.
      </p>
      <p>
        Thank you for choosing Laptop Store. We look forward to serving you and
        helping you find your perfect laptop.
      </p>
      </div>
    </motion.div>
  );
}

export default About;