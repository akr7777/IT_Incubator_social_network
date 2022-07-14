import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {friendsSidebarReducer} from "./friendsSidebar-reducer";

/*export type ProfilePostsPropsType1 = Array< {id: number, postText: string, likes: number} >*/

/*export type actionPropsType = {
    type: string,
    newText?: string,
    messageText?: string,
    updatedMessageText?: string,
    profile?: any,
    data?: authDataType,
}*/
/*export type authDataType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
}*/
/*export type state_ProfilePage_profileDescription_PropsType = {
    name: string,
    birthday: string,
    phone: string,
    email: string
}*/
/*export type state_profilePage_profilePosts_PropsType = {
    id: number,
    postText: string,
    likes: number,
}*/
/*export type state_ProfilePage_PropsType = {
    profileDescription: state_ProfilePage_profileDescription_PropsType,
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    profile: any,
}*/
export type state_messagesPage_dialogsNames_PropsType = {
    id: number,
    name: string,
    img_link: string
}
export type state_messagePage_userMessages_PropsType = {
    userID: number,
    messageText: string
}
export type state_messagesPage_PropsType = {
    dialogsNames: Array<state_messagesPage_dialogsNames_PropsType>,
    userMessages: Array<state_messagePage_userMessages_PropsType>,
    typingNewMessageText: string,
    /*dispatch: (action: actionPropsType) => number*/
}
export type state_friendsSidebar_PropsType = {
    id: number,
    name: string,
    link: string
}
