


import './App.css';
import React from 'react';
import NavBar from './NavBar.js';
import {Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Products from './Products.js';
import About from './About.js';
import Footer from './Footer.js';
import Login from './Login.js';
import Signup from './Signup.js';
  import Cart from './Cart.js';

function App() {
  return (
    <div className= "navbar">
      
      {<NavBar/>}

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products" element={<Products />}/> 
         <Route path="/About" element={<About />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Signup" element={<Signup />}/> 
        <Route path="/Cart" element={<Cart />}/>
      </Routes>
    {<Footer/>}
       </div>
  );
}

export default App;

