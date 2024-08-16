import { useState } from 'react';
import { wordList } from './wordList';

export const WordGenerator = () => {
    const generateRandomWord = () => {
        return wordList[
            Math.floor(Math.random() * wordList.length)
        ].toUpperCase();
    };

    const [word, setWord] = useState(() => generateRandomWord());

    const handleNewWord = () => {
        setWord(generateRandomWord());
    };

    return { word, handleNewWord };
};
