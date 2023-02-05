import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css'
import './App.module.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { IGlobalState} from "./components/redux/store";
import {setCounterAC, setMaxValueAC, setMinValueAC} from "./components/redux/counter-reducer";


function App() {

    const textErrIncorrectValue = 'Incorrect value'
    const textErrMaxMinValue = 'Max Value should be more Start Value'

    let [switcher, setSwitcher] = useState<boolean>(true)
    let [error, setError] = useState<string>('')
    let [isSet, setIsSet] = useState<boolean>(true);

    let {maxValue, minValue, counter} = useSelector((state: IGlobalState) => state.counter)
    const dispatch = useDispatch()

    const [firstRendering, setFirstRendering] = useState(true)

    const count = () => {
        counter = counter + 1
        if (counter <= maxValue) {
            dispatch(setCounterAC(counter))
            // setCounter(counter)
        }
    }
    const countReset = () => {
        dispatch(setCounterAC(minValue))
        // setCounter(minValue)
    }
    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        setIsSet(true)
        if (value <= 0) {
            setError(textErrIncorrectValue)
            dispatch(setMaxValueAC(value))
            // setMaxValue(value)
        } else {
            dispatch(setMaxValueAC(value))
            // setMaxValue(value)
            setError('')
        }
    }
    const onChangeInputMin = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        setIsSet(true)
        if (value < 0) {
            setError(textErrIncorrectValue)
            dispatch(setMinValueAC(value))
            // setMinValue(value)
        } else {
            dispatch(setMinValueAC(value))
            // setMinValue(value)
            setError('')
        }
    }

    const setSettingForCounter = () => {
        if (minValue < maxValue && minValue >= 0 && maxValue > 0) {
            dispatch(setCounterAC(minValue))
            // setCounter(minValue)
            setError('')
            setIsSet(false)
        } else {
            dispatch(setCounterAC(0))
            // setCounter(0)
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
            dispatch(setMaxValueAC(newMaxValue))
            // setMaxValue(newMaxValue)
        }

        const minValue = localStorage.getItem('minValue')
        if (minValue) {

            let newMinValue = JSON.parse(minValue)
            // setMinValue(newMinValue)
            dispatch(setMinValueAC(newMinValue))
            setIsSet(false)
            dispatch(setCounterAC(newMinValue))
            // setCounter(newMinValue)
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
