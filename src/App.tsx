import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css'
import './App.module.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";
import {Navigate, Route, Routes} from "react-router-dom";


function App() {

    const textErrIncorrectValue = 'Incorrect value'
    const textErrMaxMinValue = 'Max Value should be more Start Value'

    let [switcher, setSwitcher] = useState<boolean>(true)
    let [error, setError] = useState<string>('')
    let [isSet, setIsSet] = useState<boolean>(true);

    let [maxValue, setMaxValue] = useState<number>(0);
    let [minValue, setMinValue] = useState<number>(0);

    let [counter, setCounter] = useState<number>(0);
    const [firstRendering, setFirstRendering] = useState(true)

    const count = () => {
        counter = counter + 1
        if (counter <= maxValue) {
            setCounter(counter)
        }
    }
    const countReset = () => {
        setCounter(minValue)
    }
    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        setIsSet(true)
        if (value <= 0) {
            setError(textErrIncorrectValue)
            setMaxValue(value)
        } else {
            setMaxValue(value)
            setError('')
        }
    }
    const onChangeInputMin = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
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

    const setSettings = () => {
        if (switcher) {
            setSwitcher(false)
        } else setSwitcher(true)

    }


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
            setIsSet(false)
            setCounter(newMinValue)
        }
    }, []);

    return (
        <div className={s.main}>
            {/*<Counter error={error}*/}
            {/*         counter={counter}*/}
            {/*         maxValue={maxValue}*/}
            {/*         count={count}*/}
            {/*         countReset={countReset}*/}
            {/*         minValue={minValue}*/}
            {/*         isSet={isSet}*/}
            {/*         callback={setSettings}/>*/}
            <Routes>
                <Route path={'/'} element={<Navigate to={'/counter'}/>}></Route>
                <Route path={'/counter'} element={<Counter
                    error={error}
                    counter={counter}
                    maxValue={maxValue}
                    count={count}
                    countReset={countReset}
                    minValue={minValue}
                    isSet={isSet}
                    callback={setSettings}/>}></Route>

                <Route path={'/settings'} element={<Settings
                    setSettings={setSettings}
                    onChangeInputMax={onChangeInputMax}
                    onChangeInputMin={onChangeInputMin}
                    error={error}
                    maxValue={maxValue}
                    minValue={minValue}
                    setSettingForCounter={setSettingForCounter}/>}></Route>
            </Routes>

            {/*{switcher*/}
            {/*    ? <Counter error={error}*/}
            {/*             counter={counter}*/}
            {/*             maxValue={maxValue}*/}
            {/*             count={count}*/}
            {/*             countReset={countReset}*/}
            {/*             minValue={minValue}*/}
            {/*             isSet={isSet}*/}
            {/*             callback={setSettings}/>*/}
            {/*:<Settings*/}
            {/*    setSettings={setSettings}*/}
            {/*    onChangeInputMax={onChangeInputMax}*/}
            {/*    onChangeInputMin={onChangeInputMin}*/}
            {/*    error={error}*/}
            {/*    maxValue={maxValue}*/}
            {/*    minValue={minValue}*/}
            {/*    setSettingForCounter={setSettingForCounter}/>*/}

            {/*/!*}*!/*/}
        </div>
    );
}

export default App;
