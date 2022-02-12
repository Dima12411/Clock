import React, {useState} from 'react';
import './App.css';
import DigitalClock from "./components/DigitalClock";
import styles from './components/Clock.module.css'
import AnalogClock from "./components/AnalogClock";

function App() {
    const [change, setChange] = useState<boolean>(true)

    return (
        <div className={styles.App}>
            <div>
                {change ? <AnalogClock/> : <DigitalClock/>}
            </div>
            <div className={styles.button}>
                <button onClick={() => setChange(!change)}>Change to clock</button>
            </div>
        </div>
    );
}

export default App;
