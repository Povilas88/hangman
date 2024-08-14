/* eslint-disable react/prop-types */
import { useState } from 'react';
import { WordGenerator } from '../wordGenerator/WordGenerator';
import { Keyboard } from '../keyboard/Keyboard';
import style from './CheckLetter.module.css';

export function CheckLetter({word}) {
    const [guessedLetters, setGuessedLetters] = useState([]);

    const handleGuess = (letter) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters(prev => [...prev, letter]);
        }
    };

    return (
        <div>
            <WordGenerator word={word} guessedLetters={guessedLetters} />
            <Keyboard guessedLetters={guessedLetters} onGuess={handleGuess} />
        </div>
    );
}