import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return(
        // <div className = "bar">
        
        <nav className= "elements" >
            <ul>
            <li><NavLink to = "./" exact = "true" >Home</NavLink></li>
            <li><NavLink to ="./Products" exact = "true" className= "products">Products</NavLink></li>
            <li><NavLink to ="./About" exact = "true" className= "about">About</NavLink></li>
            {/* <NavLink to ="./Contact" exact = "true" className= "contact">Contact</NavLink> */}
            <li><NavLink to ="./Login" exact = "true" className= "login"><button>Login</button></NavLink></li>
            <li><NavLink to ="./Signup" exact = "true" className= "signup"><button className= "color">Signup</button></NavLink></li>
            </ul>
        </nav>
        // </div>

    )
}
export default NavBar;