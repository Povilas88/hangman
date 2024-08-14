import { useEffect } from 'react';
import style from './Keyboard.module.css'

export function Keyboard() {
    const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

    const handleKeyPress = (event) => {
        const pressedKey = event.key.toUpperCase();
        if (keys.includes(pressedKey)) {
            console.log(`Key pressed: ${pressedKey}`);
        }
    };

    useEffect(() => {
        window.addEventListener('keyup', handleKeyPress);

        return () => {
            window.removeEventListener('keyup', handleKeyPress);
        };
    }, []);

    return (
        <div className={style.buttonContainer}>
            {keys.map(key => (
                <button key={key} className={style.button}
                onClick={() => handleKeyPress({key})}>{key}
                </button>
            ))}
        </div>
    );
}