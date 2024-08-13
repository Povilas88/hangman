import { useState } from "react";
import { wordList } from "./wordList";

export function WordGenerator(){
    const [word] = useState(() =>{
        return wordList[Math.floor(Math.random() * wordList.length)]
    })
    return word.toUpperCase();
}