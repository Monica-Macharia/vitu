import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return(
        <div className = "bar">
        <h1 className= "title">VituVizuri</h1>
        <nav className= "elements">
            <NavLink to = "./" exact = "true">Home</NavLink>
            <NavLink to ="./Products" exact = "true">Products</NavLink>
            <NavLink to ="./About" exact = "true">About</NavLink>
            <NavLink to ="./Contact" exact = "true">Contact</NavLink>
            <NavLink to ="./Login" exact = "true">Login</NavLink>
            <NavLink to ="./Signup" exact = "true">Signup</NavLink>
            <NavLink to ="./Cart" exact = "true">Cart</NavLink>
        </nav>
        </div>

    )
}
export default NavBar;