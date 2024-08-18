import { useState } from 'react';
import { wordList } from './wordList';

export const WordGenerator = () => {
    const filteredWordList = wordList.filter(
        (item) => typeof item === 'string' && item.match(/^[a-zA-Z]+$/)
    );

    const generateRandomWord = () => {
        if (filteredWordList.length === 0) {
            alert('Error: No valid words in the word list.');
            return;
        }
        const word = filteredWordList[
            Math.floor(Math.random() * filteredWordList.length)
        ]
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
