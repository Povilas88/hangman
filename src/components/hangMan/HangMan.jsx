/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import style from './HangMan.module.css';
import hangman from './hangman.png';

export function HangMan({ lives, index, setIndex }) {
    useEffect(() => {
        if (lives < 6) {
            setIndex((prev) => prev + 1);
        }
    }, [lives]);

    const renderBodyParts = () => {
        const bodyParts = [
            <div className={style.head} key="head"></div>,
            <div className={style.body} key="body"></div>,
            <div className={style.leftArm} key="leftArm"></div>,
            <div className={style.rightArm} key="rightArm"></div>,
            <div className={style.leftLeg} key="leftLeg"></div>,
            <div className={style.rightLeg} key="rightLeg"></div>,
        ];
        return bodyParts.slice(index, 6);
    };

    return (
        <div className={style.container}>
            <img src={hangman} alt="Hangman" />
            {renderBodyParts()}
        </div>
    );
}
