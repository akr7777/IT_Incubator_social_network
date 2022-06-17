import React from "react";
import s from "./Messages.module.css";
import {NavLink} from "react-router-dom";

export type DialogNamesPropsType = {
    id: number,
    name: string,
    img_link: string
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

    const dialogsNamesElements = props.dialogsNames.map( elem => <Dialog id={elem.id} name={elem.name} img_link={elem.img_link}/> );
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
    name: string,
    img_link: string
}
const Dialog = (props: DialogPropsType) => {
    return(
        <div className={s.names}>
                <img className={s.ava_img_friends} src={props.img_link}/>
                <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

type MessagePropsType = {
    userID: number
    messageText: string
}
const Message = (props: MessagePropsType) => {
    let messageText1 = props.userID == 1 ? <div className={s.msg_left}>{props.messageText}</div> : <div className={s.msg_rigth}>{props.messageText}</div>
    return(
        <div>
            {/*{props.messageText}*/}
            {messageText1}
        </div>
    );
}
export default Messages;
