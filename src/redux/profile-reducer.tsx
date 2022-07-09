//import { ProfilePropsType1 } from "../components/Profile/Profile";
import { AnyAction } from "redux";
import { userAPI } from "../api/api";
import { dispatchType } from "./redux-store";
import {actionPropsType} from "./state";

const add_Post = 'ADD-POST';
const update_new_post_text = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_USER_PROFILE = 'GET_USER_PROFILE';

//types
type contactsPropsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null,
}
type photosPropsType = {
    small: string,
    large: string,
}
export type profileType = {
    userId: number,
    //aboutMe: string,
    contacts: contactsPropsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    photos: photosPropsType,
}
type profilePostType = {
    id: number
    postText: string
    likes: number
}
export type profileReducerType = {
    profile: profileType
    profilePosts: profilePostType[]
    updatedPostText_inTextArea: string
}
let initialState12: profileReducerType = {
    profile: {
        userId: 1,
        //aboutMe: "Dimych123",
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: "sfhskh@sifj.com",
        fullName: 'sdffsd',
        photos: {
            small: 'dsf',
            large: 'dsf',
        }
    },
    profilePosts: [
        {id: 1, postText: "Hi, 132, this is my first post!", likes: 3},
        {id: 2, postText: "the second post!", likes: 5},
        {id: 3, postText: "Whats new?", likes: 1},
    ],
    updatedPostText_inTextArea: "text post",
    //profile: null,
}

export const profileReducer = (state: profileReducerType = initialState12, action: AnyAction): profileReducerType => {

    switch (action.type) {
        case add_Post: {
            let newPost = {
                id: 4,
                postText: state.updatedPostText_inTextArea,
                likes: 0
            }
            return {
                ...state,
                updatedPostText_inTextArea: "",
                profilePosts: [...state.profilePosts, newPost]
            }
        }
        case update_new_post_text: {
            return {
                ...state,
                updatedPostText_inTextArea: action.newText
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        /*case GET_USER_PROFILE:
            return {
                ...state,
            }*/
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: add_Post
    }
}
export const updateTextAreaActionCreator = (text: string) => {
    return {
        type: update_new_post_text,
        newText: text
    }
}
export const setUserProfile = (profile: profileType) => {
    return {type: SET_USER_PROFILE, profile}
}
export const getUserProfile = (userID: number) => (dispatch: dispatchType) => {
    userAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
