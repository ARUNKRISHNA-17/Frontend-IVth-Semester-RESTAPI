import React, { useState } from "react";
import axios from "axios";
import '../styles/Login.css';
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = (props) => {
  const [username, setName] = useState('');
  const [password, setPass] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make an API call for login validation
        const response = await axios.post("http://localhost:8080/login", { username, password });
        // Assuming the API response contains a success message
        if (response.data.success) {
          console.log("Login successful");
          navigate("/");
        } else {
          toast.error("Invalid credentials");
        }
      } catch (error) {
        console.log("API error:", error);
        toast.error("An error occurred while logging in");
      }
    } else {
      // Set the errors state
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Perform validation checks
    if (!username) {
      errors.username = "Username is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    // Return the errors object
    return errors;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="auth-form-container-login">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="lname" className="lname">Username</label>
            <input value={username} className="name" onChange={(e) => setName(e.target.value)} id="name" required />
            {errors.username && <span className="error">{errors.username}</span>}
            
            <label htmlFor="lpass" className="lpass">Password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" id="password" className="password" required />
            {errors.password && <span className="error">{errors.password}</span>}


            <button type="submit" className="button-login"  onClick={handleSubmit}>Log In</button>
          </form>
          <Link to={'/register'}>
            <button className="link-btn">Don't have an account? Register here.</button>
          </Link>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
}

export default Login;
