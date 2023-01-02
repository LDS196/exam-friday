import React from 'react';
import s from './Button.module.css'
type ButtonType= {
    title: string
    callback: () => void
    counter:boolean

}

const Button = (props:ButtonType) => {
    return (
        <button className={s.button} disabled={!props.counter}  onClick={()=>props.callback()}>{props.title}</button>
    );
};

export default Button;