import './App.css';
import { useState } from 'react';
import { HangMan } from './components/hangMan/HangMan';
import { CheckLetter } from './components/checkLetter/CheckLetter';
import { Scoreboard } from './components/scoreBoard/ScoreBoard';
import { WordGenerator } from './components/wordGenerator/WordGenerator';

function App() {
    const [wins, setWins] = useState(Number(localStorage.getItem('wins')) || 0);
    const [losses, setLosses] = useState(
        Number(localStorage.getItem('losses')) || 0
    );
    const [lives, setLives] = useState(6);
    const [index, setIndex] = useState(0);
    const { word, handleNewWord } = WordGenerator();

    return (
        <div className="mainContainer">
            <h1>Guess the word</h1>
            <Scoreboard wins={wins} losses={losses} lives={lives} />
            <HangMan lives={lives} index={index} setIndex={setIndex} />
            <CheckLetter
                word={word}
                handleNewWord={handleNewWord}
                setWins={setWins}
                setLosses={setLosses}
                setLives={setLives}
                setIndex={setIndex}
                lives={lives}
            />
        </div>
    );
}

export default App;
