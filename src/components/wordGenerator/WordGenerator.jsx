import { useState } from 'react';
import { wordList } from './wordList';

export const WordGenerator = () => {
    const generateRandomWord = () => {
        const word = wordList[Math.floor(Math.random() * wordList.length)]
            .trim()
            .toUpperCase();

        return word.length < 1 || word.length > 8 ? generateRandomWord() : word;
    };

    const [word, setWord] = useState(() => generateRandomWord());

    const handleNewWord = () => {
        setWord(generateRandomWord());
    };

    return { word, handleNewWord };
};
