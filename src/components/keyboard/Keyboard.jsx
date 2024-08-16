/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import style from './Keyboard.module.css';

export function Keyboard({ guessedLetters, pressedLetters, onGuess, disabled, setLosses, setWins}) {
    const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

    const handleKeyPress = (event) => {
        const pressedKey = event.key.toUpperCase();
        if (keys.includes(pressedKey)  && !disabled && !pressedLetters.includes(pressedKey)) {
            onGuess(pressedKey);
        }
    };

    useEffect(() => {
        window.addEventListener('keyup', handleKeyPress);
        return () => {
            window.removeEventListener('keyup', handleKeyPress);
        };
    }, [guessedLetters, disabled, pressedLetters]);

    const getButtonClass = (key) => {
    if (guessedLetters.includes(key)) {
        return style.correct;
    }
    if (!guessedLetters.includes(key) && pressedLetters.includes(key)) {
        return style.incorrect;
    }
    return '';
    };

    const onReset = () => {
    localStorage.clear();
     setLosses(0)
     setWins(0)
    };

    return (
        <div className={style.buttonContainer}>
            {keys.map(key => (
                <button 
                    key={key} 
                    className={getButtonClass(key)}
                    onClick={() => onGuess(key)} 
                    disabled={pressedLetters.includes(key) || disabled}>{key}
                </button>
            ))}
             <button 
            className={style.resetButton} 
            onClick={onReset}>Reset
            </button>
        </div>
    );
}