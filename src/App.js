import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <hgroup>
        <h1>Byte Sized Web</h1>
        <p>delicious snippets of code</p>
      </hgroup>
      <main>
        <article>
          <hgroup>
            <h2>Command Line Basics</h2>
            <p>getting gudd with git</p>
          </hgroup>
        </article>
        <article>
          <hgroup>
            <h2>HTML Semantics</h2>
            <p>divs dont describe diddly</p>
          </hgroup>
        </article>
        <article>
          <hgroup>
            <h2>CSS Foundations</h2>
            <p>dont be shy! its like arts & crafts</p>
          </hgroup>
        </article>
        <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </main>
      <aside>
        <h2>Other Articles</h2>
        <ul>
			    <li><a href="#">Article One</a></li>
			    <li><a href="#">Article Two</a></li>
			    <li><a href="#">Article Three</a></li>
			    <li><a href="#">Article Four</a></li>
		    </ul>
      </aside>
    </div>
  );
}

export default App;
