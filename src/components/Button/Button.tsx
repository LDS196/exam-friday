import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    setSettings?: () => void
    title: string
    callback: () => void
    disabled?: boolean

}

const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        if(props.setSettings){
            props.setSettings()
        }

        props.callback()
    }
    return (
        <button className={s.button} disabled={props.disabled} onClick={onClickHandler}>{props.title}</button>
    );
};

export default Button;