import React from 'react';
import s from "../App.module.css";

import Button from '@mui/material/Button';
import {ButtonGroup, Paper} from "@mui/material";
import {NavLink} from "react-router-dom";

type SettingsType = {
    callback: () => void
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
        callback,
        error,
        counter,
        maxValue,
        count,
        countReset,
        minValue,
        isSet
    } = props
    const textErrGreeting = 'Enter value and press  button Set!'
    const finalClassNameFor = s.block__display + ' ' + `${counter === maxValue ? s.maxValue : ''}` + ' ' + `${error ? s.error : ''}`
    return (
        <Paper className={s.block} elevation={6}>
            <Paper className={finalClassNameFor} elevation={1}>
                {error ? error : !isSet ? counter : textErrGreeting}
            </Paper>

            <div className={s.block__buttons}>
                <ButtonGroup fullWidth>
                    <Button sx={{mr: 1}} variant="contained" onClick={count}
                            disabled={isSet || counter === maxValue}>increment</Button>
                    <Button sx={{mr: 1}} variant="contained" onClick={countReset}
                            disabled={!(counter > minValue)}>reset</Button>
                    <NavLink to={'/settings'} ><Button variant="contained"
                                                       // onClick={callback}
                    >set</Button></NavLink>

                </ButtonGroup>
            </div>

        </Paper>

    );
};

export default Counter;