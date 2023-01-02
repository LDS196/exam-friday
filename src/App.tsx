import React, {useState} from 'react';
import s from './App.module.css'
import './App.module.css';
import Button from "./components/Button";

function App() {
    const maxValue:number = 5
    const minValue:number = 0

    let [counter, setCounter] = useState<number>(0);

    const count = () => {
        if (counter < maxValue) {
            counter++
            setCounter(counter)
            setTimeout(count, 500)
        }
    }
    const countReset=()=>{
        setCounter(minValue)
    }

    return (
        <div className={s.block}>
            <div className={counter === maxValue ? s.maxCounter + ' ' + s.minCounter : s.minCounter}>{counter}</div>
            <div className={s.block__button}>
                <Button title={'increment'} callback={count} counter={counter === minValue}/>
                <Button title={'reset'} callback={countReset} counter={counter > minValue}/>
            </div>

        </div>
    );
}

export default App;
