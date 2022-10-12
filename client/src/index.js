import React from 'react';
import { render } from 'react-dom';
import App from "./App"
import { BrowserRouter } from "react-router-dom";

//  render
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById("")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

