import React, {useEffect, useState} from 'react';
import styles from './Clock.module.css'

const getTwoDigitsString = (date: number) => {
    if (date < 10) {
        return '0' + date
    } else {
        return date
    }
}

const AnalogClock = () => {

    const getSeconds = () => {
        return Number(time.getSeconds())
    }

    const [time, setTime] = useState(new Date())

    const [seconds, setSeconds] = useState(getSeconds())


    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date())
            setSeconds(sec => sec + 1)
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])


    return (
        <div className={styles.clockWrapper}>
            <div className={styles.hour}>
                <div className={styles.hours}
                     style={{transform: `rotate(${+getTwoDigitsString(time.getHours() * 30) + (+getTwoDigitsString(time.getMinutes()) / 12)}deg)`}}>{}</div>
            </div>
            <div className={styles.minute}>
                <div className={styles.minutes} style={{transform: `rotate(${+getTwoDigitsString(time.getMinutes() * 6)}deg)`}}>{}</div>
            </div>
            <div className={styles.second}>
                <div className={styles.seconds} style={{transform: `rotate(${+getTwoDigitsString(seconds * 6)}deg)`}}>{}</div>
            </div>
        </div>
    )
}

export default AnalogClock;