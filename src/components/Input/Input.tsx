import React, {ChangeEvent} from 'react';
import s from './Input.module.css'



type InputType = {
    name: string
    callback: (value: string) => void
    value: number
    error: string
}
export const Input = (props: InputType) => {

    const finalClassNameForInput = `${s.input} ${props.error ? s.inputError : ''}`

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value)
    }
    return (
        <>
            <label className={s.label}>{props.name}
                <input className={finalClassNameForInput} type={"number"} onChange={onChangeHandler}
                       value={props.value.toString().replace("/*0+/", "")}/>
            </label>
        </>
    )
};

