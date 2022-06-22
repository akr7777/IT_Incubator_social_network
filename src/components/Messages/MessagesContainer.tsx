import React, {useRef} from "react";
import s from "./Messages.module.css";
import {NavLink} from "react-router-dom";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messages-reducer";
import {
    actionPropsType,
    state_messagePage_userMessages_PropsType,
    state_messagesPage_dialogsNames_PropsType, state_messagesPage_PropsType, storePropsType
} from "../../redux/state";
import Messages from "./Messages";

export type MessagesPropsType = {
    dialogsNames: Array<state_messagesPage_dialogsNames_PropsType>,
    userMessages: Array<state_messagePage_userMessages_PropsType>,
    typingNewMessageText: string,
    dispatch: (action: actionPropsType) => number
}
type MessagesPropsType1 = {
    store: storePropsType
}
export const MessagesContainer = (props: MessagesPropsType1) => {

    let addNewMessage = (txt: string) => {
        props.store.dispatch(addNewMessageActionCreator(txt));
    }

    let updateNewMessageTextArea = (txt: string) => {
        props.store.dispatch( updateNewMessageActionCreator(txt) );
    }

    return (<Messages
        dialogsNames={props.store.getState().messagesPage.dialogsNames}
        userMessages={props.store.getState().messagesPage.userMessages}
        typingNewMessageText={props.store.getState().messagesPage.typingNewMessageText}

        addNewMessage={addNewMessage}
        updateTextArea={updateNewMessageTextArea}
    />);
}

export default MessagesContainer;
