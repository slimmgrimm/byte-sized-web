import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h2>Byte Sized Web</h2>
            <ul>
                <li><Link to="./pages/home.js">Home</Link></li>
                <li><Link to="./pages/warmups.js">Warm ups</Link></li>
                <li><Link to="./pages/react.js">React</Link></li>
                <li><Link to="./pages/css.js">CSS</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar