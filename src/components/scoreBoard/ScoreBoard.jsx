/* eslint-disable react/prop-types */
import style from './Scoreboard.module.css';

export const Scoreboard = ({ wins, losses, lives }) => {
   
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