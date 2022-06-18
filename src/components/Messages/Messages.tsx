import React, {useRef} from "react";
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

    let newMessageTextarea = useRef<HTMLTextAreaElement>(null);
    let addNewMessage = () => {
        let txt = newMessageTextarea.current !== null ? newMessageTextarea.current.value : "";
        alert(txt);
    }

    return (
        <div className={s.messages}>
            <div className={s.dialogItems}>
                { dialogsNamesElements }
            </div>
            <div className={s.message}>
                { messagesElements }
                <div className={s.add_new_message_div}>
                    <h3 className={s.new_message_item}>New message</h3>
                    <textarea className={s.new_message_textarea + " " + s.new_message_item} ref={newMessageTextarea} placeholder="type your new message here"/>
                    <button className={s.new_message_button + " " + s.new_message_item} onClick={addNewMessage}>Отправить</button>
                </div>
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
            {messageText1}
        </div>
    );
}
export default Messages;
