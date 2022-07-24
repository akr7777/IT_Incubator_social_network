import React, {useRef} from "react";
import s from "./Messages.module.css";
import {Navigate, NavLink} from "react-router-dom";
import {addNewMessageActionCreator, dialogsNamesType, MessagesReducerType, updateNewMessageActionCreator, userMessagesType} from "../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import { AppStateType, dispatchType } from "../../redux/redux-store";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { getDialogNames, getTypingNewMessageText, getUserMessages } from "../../redux/messages_selector";


//types
type MapStateToPropsType = {
    dialogsNames: Array<dialogsNamesType>,
    userMessages: Array<userMessagesType>,
    typingNewMessageText: string,
}
type MapDispatchToPropsType = {
    addNewMessage: (txt: string) => void,
    updateTextArea: (txt: string) => void,
    onSubmitNewMessageForm: (values: any) => void,
}

export type MessagesPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsNames: getDialogNames(state),
        userMessages: getUserMessages(state),
        typingNewMessageText: getTypingNewMessageText(state),
    }
}
let mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        addNewMessage: (txt: string) => {
            dispatch(addNewMessageActionCreator(txt));
        },
        updateTextArea: (txt: string) => {
            dispatch(updateNewMessageActionCreator(txt));
        },
        onSubmitNewMessageForm: (values: any) => {
            const txt = values.newMessageTextTextArea;
            dispatch(updateNewMessageActionCreator('txt'));
            dispatch(addNewMessageActionCreator(txt));
        }
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)
