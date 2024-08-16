/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useEffect } from 'react';
import { DisplayWord } from '../displayWord/DisplayWord';
import { Keyboard } from '../keyboard/Keyboard';

export function CheckLetter({ word, setWins, setLosses, lives, setLives }) {
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [pressedLetters, setPressedLetters] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    const handleGuess = (letter) => {
        if (!pressedLetters.includes(letter)){
            setPressedLetters(prev => [...prev, letter]);
        }
        if (word.includes(letter) && !gameOver) {
            setGuessedLetters(prev => [...prev, letter]);
        } else if (!word.includes(letter) && !gameOver) {
            setLives(prev => prev - 1);
        }
    };

    useEffect(() => {
        if (lives === 0) {
            setLosses(prev => prev + 1);
            setGameOver(true);
        } else if (word.length === guessedLetters.length) {
            setWins(prev => prev + 1);
            setGameOver(true);
        }
    }, [guessedLetters, lives, word, setWins, setLosses]);

    const resetGame = () => {
        setGuessedLetters([]);
        setLives(6);
        setGameOver(false);
        window.location.reload()
    };

    return (
        <div className='bottomContainer'>
            <DisplayWord word={word} guessedLetters={guessedLetters} />
            <Keyboard 
            pressedLetters={pressedLetters} 
            guessedLetters={guessedLetters} 
            word={word} 
            onGuess={handleGuess} 
            disabled={gameOver} />
            {gameOver && (
                <div className='resetBtnContainer'>
                    <h2>{lives === 0 ? 'You lost' : 'You won!'}</h2>
                    <button onClick={resetGame}>
                        {lives === 0 ? 'New game' : 'Play again'}
                    </button>
                </div>
            )}
        </div>
    );
}