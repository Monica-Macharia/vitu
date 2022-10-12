import React from 'react';
import "./style.css";
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Route , Navigate} from 'react-router';


const App = () => {
    // Import
    return (
        <>
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/Login" component={Login}/>
        <Navigate from="/" to="/Signup" />
        </>
    );
};

// exports
export default App;