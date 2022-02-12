import React from 'react';
import styles from './Button.module.css'

type ButtonPropsType = {
    change: boolean
    setChange: (change: boolean) => void
}

const Button = ({change, setChange, ...props}: ButtonPropsType) => {
    return (
        <div>
            <button className={styles.button} onClick={() => setChange(!change)}>Change to clock</button>
        </div>
    );
};

export default Button;