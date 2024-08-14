/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import style from './Keyboard.module.css';

export function Keyboard({ guessedLetters, onGuess }) {
    const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

    const handleKeyPress = (event) => {
        const pressedKey = event.key.toUpperCase();
        if (keys.includes(pressedKey) && !guessedLetters.includes(pressedKey)) {
            onGuess(pressedKey);
        }
    };

    useEffect(() => {
        window.addEventListener('keyup', handleKeyPress);
        return () => {
            window.removeEventListener('keyup', handleKeyPress);
        };
    }, [guessedLetters]);

    return (
        <div className={style.buttonContainer}>
            {keys.map(key => (
                <button key={key} className={style.button}
                    onClick={() => onGuess(key)}>
                    {key}
                </button>
            ))}
        </div>
    );
}