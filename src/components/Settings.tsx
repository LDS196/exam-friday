import React, {ChangeEvent} from 'react';
import s from "../App.module.css";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import {NavLink} from "react-router-dom";

type SettingsType = {
    setSettings: () => void
    onChangeInputMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeInputMin: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
    maxValue: number
    minValue: number
    setSettingForCounter: () => void

}
const Settings: React.FC<SettingsType> = (props) => {
    const {
        setSettings,
        onChangeInputMax, onChangeInputMin,
        error, maxValue, minValue,
        setSettingForCounter
    } = props

    const OnClickHandler = () => {
        setSettings();
        setSettingForCounter()

    }
    return (
        <div className={s.block}>
            <div className={s.block__display}>
                <TextField
                    onChange={onChangeInputMax}
                    value={maxValue}
                    label="Max Value"
                    type="number"
                    error={!!error}/>
                <TextField
                    label="Start Value"
                    value={minValue}
                    type="number"
                    error={!!error}
                    onChange={onChangeInputMin}/>
            </div>
            <div className={s.block__buttons}>
                    <Button variant="contained" onClick={OnClickHandler} disabled={!!error}>
                        <NavLink to={'/counter'}>set</NavLink>
                    </Button>


            </div>
        </div>
    );
};

export default Settings;