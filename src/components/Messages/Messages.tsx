import React from "react";
import s from "./Messages.module.css";
import {NavLink} from "react-router-dom";

const Messages = () => {
    return (
        <div className={s.messages}>
            <div className={s.dialogItems}>
                <div className={s.names + ' ' + s.active}>
                    <NavLink to={"/messages/1"}>Vika</NavLink>
                </div>
                <div className={s.names}>
                    <NavLink to={"/messages/2"}>Alex</NavLink>
                </div>
                <div className={s.names}>
                    <NavLink to={"/messages/3"}>Nika</NavLink>
                </div>
            </div>
            <div className={s.message}>
                <div>
                    Hi, how are you?
                </div>
                <div>
                    I am fine
                </div>
            </div>
        </div>
    );
}

export default Messages;