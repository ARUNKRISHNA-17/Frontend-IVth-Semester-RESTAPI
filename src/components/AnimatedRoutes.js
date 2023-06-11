import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddDetails from '../pages/AddDetails';
import Main from '../pages/Main';
import ViewDetails from '../pages/ViewDetails';
import EditDetails from '../pages/EditDetails';
import ForgotPassword from '../pages/ForgotPassword';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data" element={<Main />} />
        <Route path="/addDetails" element={<AddDetails />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route exact path="/getdetails/:lapid" element={<ViewDetails />} />
        <Route exact path="/editdetails/:lapid" element={<EditDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
