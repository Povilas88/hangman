/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { DisplayWord } from '../displayWord/DisplayWord';
import { Keyboard } from '../keyboard/Keyboard';

export function CheckLetter({
    word,
    setWins,
    setLosses,
    lives,
    setLives,
    handleNewWord,
    setIndex,
}) {
    const [guessedLetters, setGuessedLetters] = useState(
        JSON.parse(localStorage.getItem('guessedLetters')) || []
    );
    const [pressedLetters, setPressedLetters] = useState(
        JSON.parse(localStorage.getItem('pressedLetters')) || []
    );
    const [gameOver, setGameOver] = useState(
        JSON.parse(localStorage.getItem('gameOver')) || false
    );

    const handleGuess = (letter) => {
        if (gameOver) {
            return;
        }
        if (!pressedLetters.includes(letter)) {
            setPressedLetters((prev) => {
                const updatedPressedLetters = [...prev, letter];
                localStorage.setItem(
                    'pressedLetters',
                    JSON.stringify(updatedPressedLetters)
                );
                return updatedPressedLetters;
            });
        }
        if (word.includes(letter)) {
            setGuessedLetters((prev) => {
                const updatedGuessedLetters = [...prev, letter];
                localStorage.setItem(
                    'guessedLetters',
                    JSON.stringify(updatedGuessedLetters)
                );
                return updatedGuessedLetters;
            });
        } else if (!word.includes(letter)) {
            setLives((prev) => {
                const localLives = prev - 1;
                localStorage.setItem('lives', localLives);
                return localLives;
            });
        }
    };

    useEffect(() => {
        if (gameOver) {
            localStorage.setItem('gameOver', gameOver);
        }
    }, [gameOver]);

    useEffect(() => {
        if (gameOver) {
            return;
        }
        if (lives === 0) {
            setLosses((prev) => {
                const localLosses = prev + 1;
                localStorage.setItem('losses', localLosses);
                return localLosses;
            });
            setGameOver(true);
        } else if (
            word.split('').every((letter) => guessedLetters.includes(letter))
        ) {
            setWins((prev) => {
                const localWins = prev + 1;
                localStorage.setItem('wins', localWins);
                return localWins;
            });
            setGameOver(true);
        }
    }, [guessedLetters, lives, word, setWins, setLosses, gameOver]);

    const resetGame = () => {
        setGuessedLetters([]);
        setPressedLetters([]);
        setLives(6);
        setGameOver(false);
        handleNewWord();
        setIndex(0);
        localStorage.setItem('hangmanIndex', 0);
        localStorage.setItem('gameOver', false);
        localStorage.setItem('pressedLetters', '[]');
        localStorage.setItem('guessedLetters', '[]');
        localStorage.setItem('lives', 6);
    };

    return (
        <div className="bottomContainer">
            <DisplayWord word={word} guessedLetters={guessedLetters} />
            <Keyboard
                setGuessedLetters={setGuessedLetters}
                setPressedLetters={setPressedLetters}
                setLives={setLives}
                setGameOver={setGameOver}
                handleNewWord={handleNewWord}
                pressedLetters={pressedLetters}
                guessedLetters={guessedLetters}
                setLosses={setLosses}
                setWins={setWins}
                setIndex={setIndex}
                onGuess={handleGuess}
                disabled={gameOver}
            />
            {gameOver && (
                <div className="resetBtnContainer">
                    <h2>{lives === 0 ? 'You lost' : 'You won!'}</h2>
                    <button onClick={resetGame}>
                        {lives === 0 ? 'New game' : 'Play again'}
                    </button>
                </div>
            )}
        </div>
    );
}
