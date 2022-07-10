import React, {useRef} from "react";
import s from "./Messages.module.css";
import {Navigate, NavLink} from "react-router-dom";
import {addNewMessageActionCreator, MessagesReducerType, updateNewMessageActionCreator} from "../../redux/messages-reducer";
import Messages, { MessagesPropsType } from "./Messages";
import {connect} from "react-redux";
import { AppStateType, dispatchType } from "../../redux/redux-store";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsNames: state.messagesPage.dialogsNames,
        userMessages: state.messagesPage.userMessages,
        typingNewMessageText: state.messagesPage.typingNewMessageText,
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)
