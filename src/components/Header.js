import React from 'react';
import logo from '../images/web.png'

function Header() {
    return (
      <div className='title'>
        <img className='logo' src={ logo } alt='logo' />
        <hgroup className='hero'>
          <h1>Byte Sized Web</h1>
          <p>delicious snippets of code</p>
        </hgroup>
          <nav>
            <button>Home</button>
            <button>About</button>
            <button>Cheatsheets</button>
          </nav>
      </div>
  )
}

// const Header = () =>       
// <hgroup>
// <h1>Byte Sized Web</h1>
// <p>delicious snippets of code</p>
// </hgroup>


export default Header;