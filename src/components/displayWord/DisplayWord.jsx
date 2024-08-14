/* eslint-disable react/prop-types */
import style from './DisplayWord.module.css';

export function DisplayWord({guessedLetters, word }) {
    const splitWord = word.toUpperCase().split('');

    return (
        <div className={style.wordDiv}>
            {splitWord.map((letter, index) => (
                <span key={index}>
                    {guessedLetters.includes(letter) ? letter : '_'}
                </span>
            ))}
        </div>
    ); 
}
