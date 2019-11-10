import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import Postform from './components/Postform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">CS NY Chat</h1>
      </header>
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
