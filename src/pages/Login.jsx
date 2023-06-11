import React, { useState } from "react";
import axios from "axios";
import '../styles/Login.css';
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const data = {
        username: username,
        password: password,
      };

      try {
        const response = await axios.post(`http://localhost:8080/login/${username}/${password}`, data);
        if (response.data === "Login successful") {
          console.log("Login successful");
          toast.success("Login Success");
          navigate("/");
        } else {
          toast.error("Invalid credentials");
        }
      } catch (error) {
        console.log("API error:", error);
        toast.error("An error occurred while logging in");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!username) {
      errors.username = "Username is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

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
          <form className="login-form">
            <h2>Login</h2>
            <label htmlFor="lname" className="lname">Username</label>
            <input value={username} className="name" onChange={handleUsernameChange} id="name" required />
            {errors.username && <span className="error">{errors.username}</span>}
            
            <label htmlFor="lpass" className="lpass">Password</label>
            <input value={password} onChange={handlePasswordChange} type="password" id="password" className="password" required />
            {errors.password && <span className="error">{errors.password}</span>}


            <button type="submit" className="button-login"  onClick={handleSubmit}>Log In</button>
          </form>
          <Link to={'/register'}>
            <button className="link-btn">Don't have an account? Register here.</button>
          </Link>
          <Link to={'/forgot'}>
            <button className="link-btn-forgot">Forgot Password?</button>
          </Link>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
}

export default Login;
