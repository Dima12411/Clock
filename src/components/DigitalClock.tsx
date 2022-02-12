import React, {useEffect, useState} from 'react';

const getTwoDigitsString = (date: number) => {
    if (date < 10) {
        return '0' + date
    } else {
        return date
    }
}

const DigitalClock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    return (
        <div>
            <span>{getTwoDigitsString(time.getHours())}</span>
            :
            <span>{getTwoDigitsString(time.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(time.getSeconds())}</span>
        </div>
    );
};

export default DigitalClock;