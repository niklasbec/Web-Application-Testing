import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Scoreboard from './components/scoreboard';

function App() {

  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  if(strikes >= 3) {
    alert('3 Strikes and you are out!')
    setStrikes(0)
    setBalls(0)
  } else if (balls >= 4){
    alert('4 Balls go to first base ')
    setStrikes(0)
    setBalls(0)
  }

  return (
    <div className="App">
      <Dashboard setBalls={setBalls} setStrikes={setStrikes} strikes={strikes} />
      <Scoreboard balls={balls} strikes={strikes}/>
    </div>
  );
}

export default App;
