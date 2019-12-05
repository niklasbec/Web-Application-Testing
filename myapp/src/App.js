import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Scoreboard from './components/scoreboard';

function App() {

  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  return (
    <div className="App">
      <Dashboard setBalls={setBalls} setStrikes={setStrikes} />
      <Scoreboard balls={balls} strikes={strikes}/>
    </div>
  );
}

export default App;
