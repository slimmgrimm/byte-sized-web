import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Warmups from './components/Warmups.js'
import ReactSection from './components/ReactSection.js';
import CssSection from './components/CssSection.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Warmups />
      <ReactSection />
      <CssSection />
    </div>
  );
}

export default App;
