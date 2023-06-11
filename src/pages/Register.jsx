import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Register.css';
import axios from 'axios';

export default function Register() {
  const navigate = useNavigate();
  
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const { username, email, password } = signupData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sign Up button clicked"); // Log button click event

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:8080/register", {
          username: username,
          email: email,
          password: password,
        });

        if (response.data === "Registration successful") {
          console.log("Registration successful");
          toast.success("Success!!");
          navigate('/login'); // Navigate to the login page
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("An error occurred during registration");
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

    if (!email) {
      errors.email = "Email is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="auth-form-container-register">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label className="username" htmlFor="username">Username</label>
            <input
              value={username}
              onChange={handleInputChange}
              type="text"
              id="username"
              name="username"
              required
            />
            {errors.username && <span className="error">{errors.username}</span>}

            <label className="email" htmlFor="email">Email</label>
            <input
              value={email}
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <label className="password" htmlFor="password">Password</label>
            <input
              value={password}
              onChange={handleInputChange}
              type="password"
              id="password"
              name="password"
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}

            <button type="submit" className="button-register">
              Sign Up
            </button>
            <ToastContainer
              autoClose={3000}
              hideProgressBar={true}
              position="top-center"
              toastClassName="toast-container"
              closeButton={false}
              newestOnTop={false}
              pauseOnFocusLoss={false}
              draggable={false}
            />
          </form>
          <Link to="/login">
            <button className="link-btn-register">
              Already have an account? Login here.
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
