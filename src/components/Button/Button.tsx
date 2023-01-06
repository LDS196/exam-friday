import React from 'react';
import s from './Button.module.css'
type ButtonType= {
    title: string
    callback: () => void
    disabled:boolean

}

const Button = (props:ButtonType) => {
    return (
        <button className={s.button} disabled={props.disabled}  onClick={()=>props.callback()}>{props.title}</button>
    );
};

export default Button;