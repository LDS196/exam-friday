import React from 'react';
import s from "../App.module.css";
import Button from "./Button/Button";

type SettingsType = {
    error: string
    counter: number
    maxValue: number
    count: () => void
    countReset: () => void
    minValue: number
    isSet: boolean

}
const Counter: React.FC<SettingsType> = (props) => {
    const {
        error,
        counter,
        maxValue,
        count,
        countReset,
        minValue,
        isSet
    } = props
    const textErrGreeting = 'Enter value and press  button Set!'
    return (
        <div className={s.block}>
            <div className={s.block__display + ' ' + `${counter === maxValue ? s.maxValue : ''}` +
                ' ' + `${error ? s.error : ''}`}>
                {error ? error : !isSet ? counter : textErrGreeting}
            </div>
            <div className={s.block__buttons}>
                <Button title={'increment'} callback={count} disabled={isSet || counter === maxValue}/>
                <Button title={'reset'} callback={countReset} disabled={!(counter > minValue)}/>
            </div>

        </div>
    );
};

export default Counter;