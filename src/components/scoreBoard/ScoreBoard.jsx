import { useState } from 'react';
import style from './Scoreboard.module.css'

export const Scoreboard = () => {
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [lives, setLives] = useState(6);

    return (
        <div className={style.scoreContainer}>
            <div className={style.win}>
                <p>Wins: </p>
                <span>{wins}</span>
            </div>
            <div className={style.lose}>
                <p>Loses: </p>
                <span>{losses}</span>
            </div>
            <div className={style.lives}>
                <p>Lives: </p>
                <span>{lives}</span>
            </div>
        </div>
    );
};