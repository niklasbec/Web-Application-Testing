import React, { useState } from 'react';

function Scoreboard(props) {

  return (
    <div className="App">
      <h1 className='scoreboardh1'>Scoreboard</h1>

      <div className='balls'>
        <h3>Balls: {props.balls} </h3>
      </div>

      <div className='strikes'>
        <h3>Strikes: {props.strikes} </h3>
      </div>
    </div>
  );
}

export default Scoreboard;