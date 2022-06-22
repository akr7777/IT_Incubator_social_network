import React, {useRef} from "react";
import s from "./Messages.module.css";
import {NavLink} from "react-router-dom";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messages-reducer";
import {
    actionPropsType,
    state_messagePage_userMessages_PropsType,
    state_messagesPage_dialogsNames_PropsType, state_messagesPage_PropsType, storePropsType
} from "../../redux/state";

export type MessagesPropsType = {
    dialogsNames: Array<state_messagesPage_dialogsNames_PropsType>,
    userMessages: Array<state_messagePage_userMessages_PropsType>,
    typingNewMessageText: string,
    addNewMessage: (txt: string) => void,
    updateTextArea: (txt:string)=> void
    /*dispatch: (action: actionPropsType) => number*/
}
type MessagesPropsType1 = {
    store: storePropsType
}
export const Messages = (props: MessagesPropsType) => {

    const dialogsNamesElements = props.dialogsNames.map( elem => <Dialog id={elem.id} name={elem.name} img_link={elem.img_link}/> );
    const messagesElements = props.userMessages.map( elem => <Message userID={elem.userID} messageText={elem.messageText} /> );
    let newMessageTextarea = useRef<HTMLTextAreaElement>(null);

    let onAddNewMessage = () => {
        let el = newMessageTextarea.current;
        if (el !== null) {
            let txt = el.value;
            props.addNewMessage(txt);
            /*props.store.dispatch(addNewMessageActionCreator(txt));*/
            el.value = "";
        }
    }

    let onUpdateTextArea = () => {
        let el = newMessageTextarea.current;
        if (el !== null) {
            let txt = el.value;
            props.updateTextArea(txt);
            /*props.dispatch( updateNewMessageActionCreator(txt) );*/
        }
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
                    <textarea
                        className={s.new_message_textarea + " " + s.new_message_item}
                        ref={newMessageTextarea}
                        placeholder="type your new message here"
                        value={props.typingNewMessageText}
                        onChange={onUpdateTextArea}
                    />
                    <button className={s.new_message_button + " " + s.new_message_item} onClick={onAddNewMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

/*type DialogPropsType = {
    id: number,
    name: string,
    img_link: string
}*/
const Dialog = (props: state_messagesPage_dialogsNames_PropsType) => {
    return(
        <div className={s.names}>
                <img className={s.ava_img_friends} src={props.img_link}/>
                <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

/*type MessagePropsType = {
    userID: number
    messageText: string
}*/
const Message = (props: state_messagePage_userMessages_PropsType) => {
    let messageText1 = props.userID == 1 ? <div className={s.msg_left}>{props.messageText}</div> : <div className={s.msg_rigth}>{props.messageText}</div>
    return(
        <div>
            {messageText1}
        </div>
    );
}
export default Messages;
