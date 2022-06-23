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
import {StoreContext} from "../../StoreContext";

export type MessagesPropsType = {
    dialogsNames: Array<state_messagesPage_dialogsNames_PropsType>,
    userMessages: Array<state_messagePage_userMessages_PropsType>,
    typingNewMessageText: string,
    dispatch: (action: actionPropsType) => number
}
type MessagesPropsType1 = {
    store: storePropsType
}
export const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addNewMessage = (txt: string) => {
                        store.dispatch(addNewMessageActionCreator(txt));
                    }

                    let updateNewMessageTextArea = (txt: string) => {
                        store.dispatch( updateNewMessageActionCreator(txt) );
                    }

                    return (<Messages
                        dialogsNames={store.getState().messagesPage.dialogsNames}
                        userMessages={store.getState().messagesPage.userMessages}
                        typingNewMessageText={store.getState().messagesPage.typingNewMessageText}

                        addNewMessage={addNewMessage}
                        updateTextArea={updateNewMessageTextArea}
                    />);
                }
            }
        </StoreContext.Consumer>
    );


}

export default MessagesContainer;
