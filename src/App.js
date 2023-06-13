import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
import { ShopContextProvider } from "./context/ShopContext";


function App() {
  return (
  <div className="App">
    <ShopContextProvider>
      <Router>
        <Navbar/>
          <AnimatedRoutes/> 
          <ToastContainer autoClose={3000} />
      </Router>
    </ShopContextProvider>
  </div> 
  )
}

export default App;
