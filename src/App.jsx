// import { useState } from 'react';
import './App.css';
import hangman from './components/img/hangman.png';

function App() {
  
  return (
    <>
    <div className='mainContainer'>
      <h1>Guess a word</h1>
      <div className="scoreContainer">
        <div className="win">
          <p>Wins: </p>
          <span>0</span>
        </div>
        <div className="lose">
          <p>Loses: </p>
          <span>0</span>
        </div>
      </div>
      <img src={hangman} alt="" />
      <p>Result</p>
      <div className='keyboardContainer'></div>
    </div>
    </>
  )
}

export default App
