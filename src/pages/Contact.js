import React from "react";
import PizzaLeft from "../assets/contact.jpg";
import "../styles/Contact.css";
import {motion} from 'framer-motion';
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function Contact() {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    toast.success("Your issues will be dealt with asap");
    navigate('/');
  }
  return (
    <motion.div className="contact"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit" onClick={handleSubmit}> Send Message</button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;