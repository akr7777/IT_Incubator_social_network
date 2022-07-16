import React from "react";
import s1 from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {Description} from "./Description/Description";
/*import {
    actionPropsType,
    state_profilePage_profilePosts_PropsType,
} from "../../redux/state";*/
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {DescriptionContainer} from "./Description/DescriptionContainer";
import {profileReducer, profileReducerType, profileType } from "../../redux/profile-reducer";
import { Navigate } from "react-router-dom";

const Profile = () => {

    return (
        <div className={s1.profile}>
            <DescriptionContainer />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;