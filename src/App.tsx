import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import './App.module.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";


function App() {

    const textErrIncorrectValue = 'Incorrect value'
    const textErrMaxMinValue = 'Max Value should be more Start Value'


    let [error, setError] = useState<string>('')
    let [isSet, setIsSet] = useState<boolean>(true);

    let [maxValue, setMaxValue] = useState<number>(0);
    let [minValue, setMinValue] = useState<number>(0);

    let [counter, setCounter] = useState<number>(0);

    const count = () => {
        counter = counter + 1
        if (counter <= maxValue) {
            setCounter(counter)
        }
    }
    const countReset = () => {
        setCounter(minValue)
    }
    const onChangeInputMax = (value: number) => {
        setIsSet(true)
        if (value <= 0) {
            setError(textErrIncorrectValue)
            setMaxValue(value)
        } else {
            setMaxValue(value)
            setError('')
        }
    }
    const onChangeInputMin = (value: number) => {
        setIsSet(true)
        if (value < 0) {
            setError(textErrIncorrectValue)
            setMinValue(value)
        } else {
            setMinValue(value)
            setError('')
        }
    }

    const setSettingForCounter = () => {
        if (minValue < maxValue && minValue >= 0 && maxValue > 0) {
            setCounter(minValue)
            setError('')
            setIsSet(false)
        } else {
            setCounter(0)
            setError(textErrMaxMinValue)
        }
    }

    const [firstRendering, setFirstRendering] = useState(true)

    useEffect(() => {
        if (!firstRendering) {
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
            localStorage.setItem('minValue', JSON.stringify(minValue))
        }
        setFirstRendering(false)
    }, [maxValue, minValue]);

    useEffect(() => {
        const maxValue = localStorage.getItem('maxValue')
        if (maxValue) {
            let newMaxValue = JSON.parse(maxValue)
            setMaxValue(newMaxValue)
        }

        const minValue = localStorage.getItem('minValue')
        if (minValue) {
            let newMinValue = JSON.parse(minValue)
            setMinValue(newMinValue)
        }
    }, []);

    return (
        <div className={s.main}>
            <Settings
                onChangeInputMax={onChangeInputMax}
                onChangeInputMin={onChangeInputMin}
                error={error}
                maxValue={maxValue}
                minValue={minValue}
                setSettingForCounter={setSettingForCounter}/>
            <Counter error={error}
                     counter={counter}
                     maxValue={maxValue}
                     count={count}
                     countReset={countReset}
                     minValue={minValue}
                     isSet={isSet}/>
        </div>
    );
}

export default App;
