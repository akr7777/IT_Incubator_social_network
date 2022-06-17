import React from "react";
import s from "./Friend.module.css";
import {NavLink} from "react-router-dom";

export const Friend = (props: any) => {
    return(
        <div className={s.ava_descr_div}>
            <img className={s.ava_img_friends} src={props.link} />
            <NavLink to="/#s"> {props.name} </NavLink>
        </div>
    );
}