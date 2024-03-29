

// import commonfile from './commonfile';
import './App.css';
import React from 'react';
import NavBar from './NavBar.js';
import {Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Products from './Products.js';
import About from './About.js';
// import Footer from './Footer.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Signin from './Signin.js';

 
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      
      {<NavBar/>}

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products" element={<Products />}/> 
         <Route path="/About" element={<About />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Signup" element={<Signup />}/> 

        <Route path="Login/Dashboard" element={<Dashboard />}/>
        <Route path="Signup/Signin" element={<Signin />}/>
        
      </Routes>
    {/* {<Footer/>} */}
       </div>
  );
}

export default App;

