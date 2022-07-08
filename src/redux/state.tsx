import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {friendsSidebarReducer} from "./friendsSidebar-reducer";

/*export type ProfilePostsPropsType1 = Array< {id: number, postText: string, likes: number} >*/

export type actionPropsType = {
    type: string,
    newText?: string,
    messageText?: string,
    updatedMessageText?: string,
    profile?: any,
    data?: authDataType,
}
export type authDataType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
}
export type state_ProfilePage_profileDescription_PropsType = {
    name: string,
    birthday: string,
    phone: string,
    email: string
}
export type state_profilePage_profilePosts_PropsType = {
    id: number,
    postText: string,
    likes: number,
}
export type state_ProfilePage_PropsType = {
    profileDescription: state_ProfilePage_profileDescription_PropsType,
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    profile: any,
}
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
/*

export type statePropsType = {
    profilePage: state_ProfilePage_PropsType,
    messagesPage: state_messagesPage_PropsType,
    friendsSidebar: Array<state_friendsSidebar_PropsType>,
    usersPage: userType[],
}
export type storePropsType = {
    _state: statePropsType,
    _callSubscriber: (state: statePropsType) => number,
    getState: () => statePropsType,
    subscribe: (observer: any) => number,
    dispatch: (action: actionPropsType) => number
}
*/

export type locationType = {
    city: string,
    country: string
}

type userPhotosType = {
    small: string,
    large: string,
}
export type userType = {
    id: number,
    name: string,
    uniqueUrlName: string,
    status?: string,
    photos: userPhotosType,
    followed: boolean /*Is current authorized user following returned user. If current user is anonymous then value always will be false*/
}

/*export let store:storePropsType = {
    _state: {
        profilePage: {
            profileDescription: {
                name: "Dimych123",
                birthday: "21.02.1985",
                phone: "+7 (999) 123-45-67",
                email: "sfhskh@sifj.com"
            },
            profilePosts: [
                {id: 1, postText: "Hi, 132, this is my first post!", likes: 3},
                {id: 2, postText: "the second post!", likes: 5},
                {id: 3, postText: "Whats new?", likes: 1},
            ],
            updatedPostText_inTextArea: "IT NDV"
        },
        messagesPage: {
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
        },
        friendsSidebar: [
            {id: 1, name: 'Vika', link: "https://cdn3.vectorstock.com/i/1000x1000/13/92/cartoon-avatar-woman-front-view-vector-9421392.jpg"},
            {id: 2, name: 'Sasha', link: "https://yt3.ggpht.com/a/AATXAJwoNthHklpdVHlrH4H6hFsq7mqV1R0t1_kw7g=s900-c-k-c0xffffffff-no-rj-mo"},
            {id: 3, name: 'Nika', link: "https://i.pinimg.com/236x/88/26/32/882632057c16a4f3ddd2b0eb81e1b09a.jpg"}
        ]
    },
    _callSubscriber(state: statePropsType) {
        console.log("state changed...")
        return 1;
    },
    getState() {
        return this._state;
    },
    subscribe (observer: any) {
        this._callSubscriber = observer;
        return 1;
    },

    dispatch(action: actionPropsType) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.friendsSidebar = friendsSidebarReducer(this._state.friendsSidebar, action)

        this._callSubscriber(this._state);
        return 1;
    }
}*/

/*window.store = store;*/
