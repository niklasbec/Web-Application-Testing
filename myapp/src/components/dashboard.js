import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 1rem 0;
    margin: 0.5rem 1rem;
    width: 7rem;
    background: royalblue;
    color: white;
    border: 2px solid white;
    font-size: 1.4rem;
`

function Dashboard() {
    
  return (
    <div className="App">
        <h1>Controls</h1>
        <div className='buttons'>
        <Button>Strike</Button>
        <Button>Ball</Button>
        <Button>Foul</Button>
        <Button>Hit</Button>
        </div>
    </div>
  );
}

export default Dashboard;