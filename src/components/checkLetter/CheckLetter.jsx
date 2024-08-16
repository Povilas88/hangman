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
            setLosses(prev => {
                const localLosses = prev + 1;
                localStorage.setItem('losses', localLosses);
                return localLosses;
            });
            setGameOver(true);
        } else if (word.split('').every(letter => guessedLetters.includes(letter))) {
            setWins(prev => {
                const localWins = prev + 1;
                localStorage.setItem('wins', localWins);
                return localWins;
            });
            setGameOver(true);
        }
    }, [guessedLetters, lives, word, setWins, setLosses]);

    const resetGame = () => {
        setGuessedLetters([]);
        setPressedLetters([]);
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
            setLosses={setLosses} 
            setWins={setWins} 
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