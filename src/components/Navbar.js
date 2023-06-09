import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo"/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Products </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/login"> Login/SignUp </Link>
          <Link to="/data"> Data </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/" className="btn-link"> Home </Link>
        <Link to="/menu" className="btn-link"> Products </Link>
        <Link to="/about" className="btn-link"> About </Link>
        <Link to="/contact" className="btn-link"> Contact </Link>
        <Link to="/login" className="btn-link"> Login/SignUp </Link>         
        <Link to="/data" className="btn-link"> Data </Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Navbar;