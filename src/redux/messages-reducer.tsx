import { AnyAction } from "redux";

const add_new_message_string = "ADD-NEW-MESSAGE";
const update_new_message_text = "UPDATE-NEW-MESSAGE-TEXT";

type dialogsNamesType = {
    id: number
    name: string
    img_link: string
}
type userMessagesType = {
    userID: number
    messageText: string
}
export type MessagesReducerType = {
    dialogsNames: dialogsNamesType[]
    userMessages: userMessagesType[]
    typingNewMessageText: string
}
let initialState: MessagesReducerType = {
    dialogsNames: [
        {id: 1, name: 'Vika', img_link: "https://cdn3.vectorstock.com/i/1000x1000/13/92/cartoon-avatar-woman-front-view-vector-9421392.jpg"},
        {id: 2, name: 'Sasha', img_link: "https://yt3.ggpht.com/a/AATXAJwoNthHklpdVHlrH4H6hFsq7mqV1R0t1_kw7g=s900-c-k-c0xffffffff-no-rj-mo"},
        {id: 3, name: 'Nika', img_link: "https://i.pinimg.com/236x/88/26/32/882632057c16a4f3ddd2b0eb81e1b09a.jpg"}
    ],
    userMessages: [
        {userID: 1, messageText: "Hi"},
        {userID: 1, messageText: "how are you???"},
        {userID: 2, messageText: "Hi! Iam fine, and u?"}
    ],
    typingNewMessageText: "new message..."
}

export const messagesReducer = (state: MessagesReducerType = initialState, action: AnyAction) => {
    switch (action.type) {
        case add_new_message_string: {
            let newMsg = {
                userID: 2,
                messageText: action.messageText
            }
            return {
                ...state,
                typingNewMessageText: "",
                userMessages: [...state.userMessages, newMsg]
            };
           /* copyState.userMessages = [...state.userMessages, newMsg];*/
            /*copyState.userMessages.push(newMsg);
            copyState.typingNewMessageText = "";*/
            /*return copyState;*/
        }
        case update_new_message_text: {
            return {
                ...state,
                typingNewMessageText: action.updatedMessageText
            }
            /*let copyState = {...state}
            copyState.typingNewMessageText = action.updatedMessageText;
            return copyState;*/
        }
        default:
            return state;
    }
}
export const addNewMessageActionCreator = (messageText: string) => {
    return {
        type: add_new_message_string,
        messageText: messageText
    }
}
export const updateNewMessageActionCreator = (msg: string) => {
    return {
        type: update_new_message_text,
        updatedMessageText: msg
    }
}