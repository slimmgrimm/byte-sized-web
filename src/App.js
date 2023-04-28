import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
// import Navbar from './components/Navbar.js'
import Warmups from './pages/warmups.js'
import Home from './pages/home.js'
import CssPage from './pages/css.js';
import ReactPage from './pages/react.js';



function App() {
  return (
    <Router>

        <Navbar />
        <main>
         <Routes>
          <Route path="/" element={ <Home/> } />
          <Route exact path="/warmups" element={ <Warmups/> } />
          <Route path="/react" element={ <ReactPage /> } />
          <Route path="/css" element={ <CssPage />} />
         </Routes>
        </main>
    </Router>
   
  );
}

function Navbar() {
  return (
      <nav>
          <h2>Byte Sized Web</h2>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/warmups">Warm ups</Link></li>
              <li><Link to="/react">React</Link></li>
              <li><Link to="/css">CSS</Link></li>
          </ul>
      </nav>
  )
}

export default App;
