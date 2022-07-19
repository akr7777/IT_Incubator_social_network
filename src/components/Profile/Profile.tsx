import React from "react";
import s1 from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {Description} from "./Description/Description";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {DescriptionContainer} from "./Description/DescriptionContainer";
import {profileReducer, ProfileReducerType, ProfileType } from "../../redux/profile-reducer";
import { Navigate } from "react-router-dom";
import { ProfileContainerPropsType } from "./ProfileContainer";

export type ProfilePropsType = {
    isOwner: boolean,
    profilePage: ProfileReducerType,
    status: string,
    autorizedUserID: number,
    updateStatus: (status: string) => void,
    saveMainPhoto: (photoFile: any) => void,
}
const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s1.profile}>
            <DescriptionContainer
                isOwner={props.isOwner}
                profile={props.profilePage.profile}
                status={props.status}
                autorizedUserID={props.autorizedUserID}
                updateStatus={props.updateStatus}
                saveMainPhoto={props.saveMainPhoto}
            />

            <MyPostsContainer />
        </div>
    );
}

export default Profile;