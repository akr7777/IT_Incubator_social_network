//import { ProfilePropsType1 } from "../components/Profile/Profile";
import { AnyAction } from "redux";
import {profileAPI, userAPI } from "../api/api";
import { ProfileSettingsValuesType } from "../components/Settings/Settings";
import {AppThunkType, dispatchType } from "./redux-store";
//import {actionPropsType} from "./state";

const add_Post = 'profileReducer/ADD-POST';
const update_new_post_text = 'profileReducer/UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const GET_USER_PROFILE = 'profileReducer/GET_USER_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profileReducer/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_INFO = 'profileReducer/SAVE_PROFILE_INFO';

//types
type ContactsPropsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null,
    /*"facebook": string
    "website": string
    "vk": string
    "twitter": string
    "instagram": string
    "youtube": string
    "github": string
    "mainLink": string*/
}
type photosPropsType = {
    small: string,
    large: string,
}
export type ProfileType = {
    userId: number,
    aboutMe?: string,
    contacts: ContactsPropsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    photos: photosPropsType,
}
export type ProfilePostType = {
    id: number
    postText: string
    likes: number
}
export type ProfileReducerType = {
    profile: ProfileType
    profilePosts: ProfilePostType[]
    updatedPostText_inTextArea: string
    status: string
}
let initialState12: ProfileReducerType = {
    profile: {
        userId: -1,
        aboutMe: "",
        contacts: {
            "facebook": '',
            "website": '',
            "vk": '',
            "twitter": '',
            "instagram": '',
            "youtube": '',
            "github": '',
            "mainLink": '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: '',
        photos: {
            small: '',
            large: '',
        }
    },
    profilePosts: [
        {id: 1, postText: "Hi, 132, this is my first post!", likes: 3},
        {id: 2, postText: "the second post!", likes: 5},
        {id: 3, postText: "Whats new?", likes: 1},
    ],
    updatedPostText_inTextArea: "text post",
    status: '97',
    //profile: null,
}

type ProfileReducerActionType = addPostActionCreatorType | updateTextAreaActionCreatorType | setUserProfileType |
    setStatusType | savePhotoSuccessType | saveProfileInfoType;
export const profileReducer = (state: ProfileReducerType = initialState12,
                               action: ProfileReducerActionType):ProfileReducerType => {

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

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case SAVE_PROFILE_INFO:
            return {
                ...state,
                //profile: action.newProfileData,
                //fullName: action.newProfileData.fullName,

            }
        default:
            return state;
    }
}

type addPostActionCreatorType = {type: typeof add_Post}
export const addPostActionCreator = ():addPostActionCreatorType => {
    return {
        type: add_Post
    }
}

type updateTextAreaActionCreatorType = {type: typeof update_new_post_text, newText: string}
export const updateTextAreaActionCreator = (text: string):updateTextAreaActionCreatorType => {
    return {
        type: update_new_post_text,
        newText: text
    }
}

type setUserProfileType = {type: typeof SET_USER_PROFILE, profile: ProfileType}
export const setUserProfile = (profile: ProfileType):setUserProfileType => {
    return {type: SET_USER_PROFILE, profile}
}

type setStatusType = {type: typeof SET_STATUS, status:string}
export const setStatus = (status: string):setStatusType => {
    return {type: SET_STATUS, status}
}

type savePhotoSuccessType = {type: typeof SAVE_PHOTO_SUCCESS, photos:any}
export const savePhotoSuccess = (photos: any):savePhotoSuccessType => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
}

type saveProfileInfoType = {type: typeof SAVE_PROFILE_INFO, newProfileData: ProfileSettingsValuesType}
export const saveProfileInfo = (values:ProfileSettingsValuesType):saveProfileInfoType => {
    return {type: SAVE_PROFILE_INFO, newProfileData: values}
}

export const getUserProfile = (userID: number) => (dispatch: dispatchType) => {
    profileAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userID: number) => async (dispatch: dispatchType) => {
    let response = await profileAPI.getStatus(userID);
    dispatch(setStatus(response));
}

export const updateStatus = (status: string) => async (dispatch: dispatchType) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const saveMainPhoto = (file: any) => async (dispatch: dispatchType) => {
    let response = await profileAPI.saveMainPhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const onProfileSettingsSubmit = (values: ProfileSettingsValuesType) => async (dispatch: dispatchType) => {
    let response = await profileAPI.saveProfile(values);
    if (response.data.resultCode === 0) {
        dispatch(saveProfileInfo(values));
    }
}