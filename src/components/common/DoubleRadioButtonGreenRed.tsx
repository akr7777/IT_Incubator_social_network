import React from 'react';
import s from './DoubleRadioButtonGreenRed.module.css';

type DoubleRadioButtonGreenRedPropsType = {
    onClick: (position: boolean) => void,
    position: boolean,
}

const DoubleRadioButtonGreenRed = (props:DoubleRadioButtonGreenRedPropsType) => {
    const onRedClickHandler = () => {
        props.onClick(false);
    }
    const onGreenClickHandler = () => {
        props.onClick(true);
    }

    return <div className={s.main_wrapper_div}>
        <div className={!props.position ? s.red_div : ""} onClick={onRedClickHandler}/>
        <div className={props.position ? s.green_div: ""}/>
    </div>
}

export default DoubleRadioButtonGreenRed;