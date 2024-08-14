/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useEffect } from 'react';
import { DisplayWord } from '../displayWord/DisplayWord';
import { Keyboard } from '../keyboard/Keyboard';
import style from './CheckLetter.module.css';

export function CheckLetter({ word, setWins, setLosses, setLives, lives }) {
    const [guessedLetters, setGuessedLetters] = useState([]);

    const handleGuess = (letter) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters(prev => [...prev, letter]);
            if (!word.includes(letter)) {
                setLives(prev => prev - 1);
            }
        }
    };

    useEffect(() => {
        if (lives === 0) {
            setLosses(prev => prev + 1);
            resetGame();
        } else if (word.split('').every(letter => guessedLetters.includes(letter))) {
            setWins(prev => prev + 1);
            resetGame();
        }
    }, [guessedLetters, lives, word, setWins, setLosses]);

    const resetGame = () => {
        setGuessedLetters([]);
        setLives(6);
    };

    return (
        <div>
            <DisplayWord word={word} guessedLetters={guessedLetters} />
            <Keyboard guessedLetters={guessedLetters} word={word} onGuess={handleGuess} />
        </div>
    );
}