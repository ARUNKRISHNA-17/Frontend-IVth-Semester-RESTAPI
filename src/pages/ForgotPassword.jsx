import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";
import "../styles/ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const [signIn, toggle] = useState(true);
  const [forget, setForget] = useState({
    username: "",
    password: "",
  });

  const handleForget = async (e) => {
    e.preventDefault();
    const { username, password } = forget;

    try {
      await axios.put(`http://localhost:8080/updatefor/${password}/${username}`);
      toast.success("Password Reset Successful", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      navigate("/");
    } catch (error) {
      toast.error("Password Reset Failed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className={`sign-up-container ${signIn ? "sign-in" : ""}`}>
          <form className="form">
            <h2 className="title">Reset Password</h2>
            <br />
            <label className="title1">Reset Code:</label>
            <br />
            <input type="text" placeholder="Enter Your Code Here" required />
            <br />
            <label className="title1">Password:</label>
            <br />
            <input type="text" placeholder="Enter Your Password Here" required />
            <br />
            <label className="title1">Repeat Again:</label>
            <br />
            <input
              type="email"
              placeholder="Re-Enter Your Password Here"
              required
            />
            <br />

            <button className="button" onClick={() => navigate("/signin")}>
              Reset
            </button>
            <br />
          </form>
        </div>

        <div className={`sign-in-container ${signIn ? "sign-in" : ""}`}>
          <form className="form">
            <h2 className="title">Forgot Password?</h2>
            <br />
            <label className="title1">Username:</label>
            <br />
            <input
              type="email"
              placeholder="Enter Your Recovery-number Here"
              required
              value={forget.username}
              onChange={(e) =>
                setForget({ ...forget, username: e.target.value })
              }
            />
            <br />
            <label className="title1">Reset Password:</label>
            <br />
            <input
              type="password"
              placeholder="Enter Your Recovery-mail Here"
              required
              value={forget.password}
              onChange={(e) =>
                setForget({ ...forget, password: e.target.value })
              }
            />
            <br />
          </form>
        </div>

        <div className={`overlay-container ${signIn ? "sign-in" : ""}`}>
          <div className="overlay">
            <div className="left-overlay-panel">
              <h2 className="title">Wanna Re-check or Change Your Details</h2>
              <p className="paragraph">
                Make Sure The Details You Give Are Correct
              </p>
              <button className="ghost-button" onClick={() => toggle(true)}>
                Back to Forgot Page
              </button>
            </div>

            <div className="right-overlay-panel">
              <h2 className="title">
                Once You Enter The Details Click Verify
              </h2>
              <p className="paragraph">Your Password Will Be Re-set</p>
              <button className="ghost-button" onClick={handleForget}>
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ForgotPassword;
