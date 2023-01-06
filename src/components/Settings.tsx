import React from 'react';
import s from "../App.module.css";
import {Input} from "./Input/Input";
import Button from "./Button/Button";

type SettingsType = {
    onChangeInputMax: (value: number) => void
    onChangeInputMin: (value: number) => void
    error: string
    maxValue: number
    minValue: number
    setSettingForCounter: () => void

}
const Settings: React.FC<SettingsType> = (props) => {
    const {
        onChangeInputMax, onChangeInputMin,
        error, maxValue, minValue,
        setSettingForCounter
    } = props

    return (
        <div className={s.block}>
            <div className={s.block__display}>
                <Input name={'Max Value'} callback={onChangeInputMax} value={maxValue} error={error}/>
                <Input name={'Start Value'} callback={onChangeInputMin} value={minValue} error={error}/>
            </div>
            <div className={s.block__buttons}>
                <Button title={'Set'} callback={setSettingForCounter} disabled={!!error}/>
            </div>
        </div>
    );
};

export default Settings;