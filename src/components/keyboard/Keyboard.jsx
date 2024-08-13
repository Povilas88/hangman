import style from './Keyboard.module.css'

export function Keyboard() {
    const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

    return (
        <div className={style.buttonContainer}>
            {keys.map(key => {
                return <button key={key} className={style.button}>{key}</button>
            })}
        </div>
    );
}