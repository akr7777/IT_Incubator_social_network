import React from "react";
import s1 from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {Description} from "./Description/Description";
import {
    actionPropsType,
    state_profilePage_profilePosts_PropsType,
} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {DescriptionContainer} from "./Description/DescriptionContainer";
import {profileReducer, profileReducerType, profileType } from "../../redux/profile-reducer";

/*type ProfilePropsType = {
    profileDescription: state_ProfilePage_profileDescription_PropsType,//name: string,birthday: string, phone: string, email: string
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number
}
type ProfilePropsType1 = {
    store: storePropsType
}*/
/*type contactsPropsType = {
    "facebook": string | null,
    "website": string | null,
    "vk": string | null,
    "twitter": string | null,
    "instagram": string | null,
    "youtube": string | null,
    "github": string | null,
    "mainLink": string | null,
}
type photosPropsType = {
    "small": string,
    "large": string,
}*/
/*export type ProfilePropsType0 = {
    "aboutMe": string,
    "contacts": contactsPropsType,
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string | null,
    "fullName": string | null,
    "userId": number,
    "photos": photosPropsType,
}*/
/*export type ProfilePropsType1 = {
    //profile: profileType,
    profilePage: typeof profileReducer
}*/
const Profile = () => {
    //let state = props.store.getState()
    return (
        <div className={s1.profile}>
            <DescriptionContainer />
            {/*<MyPostsContainer />*/}
        </div>
    );
}

export default Profile;