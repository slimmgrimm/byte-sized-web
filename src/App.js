import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header.js';
import Warmups from './components/Warmups.js'
import ReactSection from './components/ReactSection.js';
import CssSection from './components/CssSection.js';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cheatsheet">Users</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
      <Header />
      <Warmups />
      <ReactSection />
      <CssSection />
    </div>
        <Routes>
          <Route path="/about" element={ <About/> } />
          <Route path="/cheatsheet" element={ <Cheatsheet /> } />
          <Route path="/" element={ <Home/> } />
        </Routes>
      </div>
    </Router>
   
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Cheatsheet() {
  return <h2>Cheatsheet</h2>;
}

export default App;
