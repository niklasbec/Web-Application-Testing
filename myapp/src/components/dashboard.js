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

function Dashboard(props) {
    
    function strike () {
        props.setStrikes(s => 
            s + 1
        )
    }

    function ball () {
        props.setBalls(b => 
            b + 1
        )
    }

    function hit () {
        props.setStrikes(0)
        props.setBalls(0)
    }

    function foul () {
        if(props.strikes < 2) {
            props.setStrikes(
                s => s + 1
            )
        } else {
            alert('Strikes already at 2, foul not counted')
        }
    }
    
  return (
    <div className="App">
        <h1>Controls</h1>
        <div className='buttons'>
        <Button onClick={strike}>Strike</Button>
        <Button onClick={ball}>Ball</Button>
        <Button onClick={foul}>Foul</Button>
        <Button onClick={hit}>Hit</Button>
        </div>
    </div>
  );
}

export default Dashboard;