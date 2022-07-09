import React, {useRef} from "react";
import s from "./Messages.module.css";
import {NavLink} from "react-router-dom";
import {addNewMessageActionCreator, MessagesReducerType, updateNewMessageActionCreator} from "../../redux/messages-reducer";
import {
    actionPropsType,
    state_messagePage_userMessages_PropsType,
    state_messagesPage_dialogsNames_PropsType, state_messagesPage_PropsType
} from "../../redux/state";
import Messages from "./Messages";
/*import {StoreContext} from "../../StoreContext";*/
import {connect} from "react-redux";
import { AppStateType, dispatchType } from "../../redux/redux-store";

/*
export type MessagesPropsType = {
    dialogsNames: Array<state_messagesPage_dialogsNames_PropsType>,
    userMessages: Array<state_messagePage_userMessages_PropsType>,
    typingNewMessageText: string,
    dispatch: (action: actionPropsType) => number
}
*/


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsNames: state.messagesPage.dialogsNames,
        userMessages: state.messagesPage.userMessages,
        typingNewMessageText: state.messagesPage.typingNewMessageText,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        addNewMessage: (txt: string) => {
            dispatch(addNewMessageActionCreator(txt));
        },
        updateTextArea: (txt: string) => {
            dispatch(updateNewMessageActionCreator(txt));
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
