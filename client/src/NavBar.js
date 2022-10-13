import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return(
        <div className = "bar">
        <h1 className= "title">VituVizuri</h1>
        <nav className= "elements">
            <NavLink to = "./" exact = "true" >Home</NavLink>
            <NavLink to ="./Products" exact = "true" className= "products">Products</NavLink>
            <NavLink to ="./About" exact = "true" className= "about">About</NavLink>
            <NavLink to ="./Contact" exact = "true" className= "contact">Contact</NavLink>
            <NavLink to ="./Login" exact = "true" className= "login"><button>Login</button></NavLink>
            <NavLink to ="./Signup" exact = "true" className= "signup"><button className= "color">Signup</button></NavLink>
            <NavLink to ="./Cart" exact = "true" className= "cart"><button>Cart</button></NavLink>
        </nav>
        </div>

    )
}
export default NavBar;