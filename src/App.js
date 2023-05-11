import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
// import Navbar from './components/HeaderElements/Navbar.js'
import Warmup from './pages/warmup.js'
import Home from './pages/home.js'
import GitPage from './pages/git.js';
import HtmlPage from './pages/html.js'
import CssPage from './pages/css.js';
import ReactPage from './pages/react.js';
import Header from './components/HeaderElements/Header.js'



function App() {
  return (
    <Router>

        <Header />
        <main>
         <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/warmup" element={ <Warmup/> } />
          <Route exact path="/git" element={ <GitPage /> } />
          <Route exact path='/html' element={ <HtmlPage /> } />
          <Route exact path="/react" element={ <ReactPage /> } />
          <Route exact path="/css" element={ <CssPage />} />
         </Routes>
        </main>
    </Router>
   
  );
}

export default App;
