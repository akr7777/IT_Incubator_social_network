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
import { Navigate } from "react-router-dom";

type ProfilePropsType = {
    updateStatus: (status: string) => void,
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s1.profile}>
            <DescriptionContainer updateStatus={props.updateStatus}/>
            {/*<MyPostsContainer />*/}
        </div>
    );
}

export default Profile;