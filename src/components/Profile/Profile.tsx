import React from "react";
import s1 from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {Description} from "./Description/Description";
import {
    actionPropsType,
    state_ProfilePage_profileDescription_PropsType,
    state_profilePage_profilePosts_PropsType, storePropsType
} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {DescriptionContainer} from "./Description/DescriptionContainer";

type ProfilePropsType = {
    profileDescription: state_ProfilePage_profileDescription_PropsType,//name: string,birthday: string, phone: string, email: string
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number
}
type ProfilePropsType1 = {
    store: storePropsType
}
const Profile = () => {
    //let state = props.store.getState()
    return (
        <div className={s1.profile}>
            <DescriptionContainer />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;