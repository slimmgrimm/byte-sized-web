import React from 'react'
import './Header.css'
import Brand from './Brand.js'
import Navbar from './Navbar.js'

function Header() {
    return (
      <header>
          <Brand />
          <Navbar />
      </header>
  )
}

export default Header