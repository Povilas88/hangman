import style from './HangMan.module.css';
import hangman from './hangman.png';

export function HangMan(){
    return (
        <div className={style.container}>
            <img src={hangman} alt="" />
            <div className={style.head}></div>
            <div className={style.body}></div>
            <div className={style.leftArm}></div>
            <div className={style.rightArm}></div>
            <div className={style.leftLeg}></div>
            <div className={style.rightLeg}></div>
        </div>
    )
}