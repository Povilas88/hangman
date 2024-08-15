import './App.css';
import { useState } from 'react';
import { HangMan } from './components/hangMan/HangMan';
import { wordList } from './components/data/wordList';
import { CheckLetter } from './components/checkLetter/CheckLetter';
import { Scoreboard } from './components/scoreBoard/ScoreBoard';

function App() {
    const [word] = useState(() => wordList[Math.floor(Math.random() * wordList.length)].toUpperCase());
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [lives, setLives] = useState(6);

   return (
        <div className='mainContainer'>
            <h1>Guess the word</h1>
            <Scoreboard wins={wins} losses={losses} lives={lives} />
            <HangMan />
            <CheckLetter 
                word={word} 
                setWins={setWins} 
                setLosses={setLosses} 
                setLives={setLives} 
                lives={lives} 
            />
        </div>
    );
}

export default App