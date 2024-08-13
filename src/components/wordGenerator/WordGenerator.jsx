import { useState } from "react";
import { wordList } from "./wordList";
import style from './WordGenerator.module.css';

export function WordGenerator(){
    const [word] = useState(() =>{
        return wordList[Math.floor(Math.random() * wordList.length)]
    });

    const splitWord = word.toUpperCase().split('');

    return (
        <div className={style.wordDiv}>
            {splitWord.map((letter, index) => (
                <span key={index}>{letter}</span>
            ))}
        </div>
    ); 
}