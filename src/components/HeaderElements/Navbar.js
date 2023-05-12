import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='header-nav'>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {/* <li><NavLink to="/warmup">Warmup</NavLink></li> */}
                <li><NavLink to="/html">HTML</NavLink></li>
                <li><NavLink to="/git">git</NavLink></li>
                {/* {/* <li><NavLink to="/react">React</NavLink></li>*} */}
                <li><NavLink to="/css">CSS</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar