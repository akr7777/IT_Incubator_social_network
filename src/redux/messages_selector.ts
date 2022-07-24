import {createSelector} from 'reselect';
import { AppStateType } from './redux-store';

export const getDialogNames = (state: AppStateType) => {
    return state.messagesPage.dialogsNames;
}

export const getUserMessages = (state: AppStateType) => {
    return state.messagesPage.userMessages;
}

export const getTypingNewMessageText = (state: AppStateType) => {
    return state.messagesPage.typingNewMessageText;
}
