import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
  <div className="App">
    <Router>
      <Navbar/>
        <AnimatedRoutes/> 
        <ToastContainer autoClose={3000} />
    </Router>
  </div> 
  )
}

export default App;
