import React from "react";
import s from "./Messages.module.css";
import {NavLink} from "react-router-dom";

export type DialogNamesPropsType = {
    id: number,
    name: string
}
export type UserMessagesPropsType = {
    userID: number,
    messageText: string
}
export type MessagesPropsType = {
    dialogsNames: Array<DialogNamesPropsType>,
    userMessages: Array< UserMessagesPropsType >
}
export const Messages = (props: MessagesPropsType) => {
   /* debugger;
    const dialogsNames = props.dialogsNames;
    const userMessages = props.userMessages;*/

    const dialogsNamesElements = props.dialogsNames.map( elem => <Dialog id={elem.id} name={elem.name}/> );
    const messagesElements = props.userMessages.map( elem => <Message userID={elem.userID} messageText={elem.messageText} /> );

    return (
        <div className={s.messages}>
            <div className={s.dialogItems}>
                { dialogsNamesElements }
            </div>
            <div className={s.message}>
                { messagesElements }
            </div>
        </div>
    );
}

type DialogPropsType = {
    id: number,
    name: string
}
const Dialog = (props: DialogPropsType) => {
    return(
        <div className={s.names}>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

type MessagePropsType = {
    userID: number
    messageText: string
}
const Message = (props: MessagePropsType) => {
    return(
        <div>
            {props.userID}: {props.messageText}
        </div>
    );
}
export default Messages;
