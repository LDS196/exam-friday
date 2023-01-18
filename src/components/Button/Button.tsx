import React from 'react';

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
    return (<>
        {/*<NavLink to={'/settings'}>*/}
            <button
                // className={s.button}
                    disabled={props.disabled} onClick={onClickHandler}>{props.title}</button>
        {/*</NavLink>*/}
        {/*<Routes>*/}
        {/*    <Route path={'/settings'} element={<Settings setSettings={} onChangeInputMax={} onChangeInputMin={} error={} maxValue={} minValue={} setSettingForCounter={}}/>*/}
        {/*</Routes>*/}
        </>
    );
};

export default Button;