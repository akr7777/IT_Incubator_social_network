import React from "react";
import s1 from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {Description, DescriptionPropsType} from "./Description/Description";
import {ProfilePostsPropsType1} from "../../redux/state";

type ProfilePropsType = {
    profileDescription: DescriptionPropsType,
    profilePosts: ProfilePostsPropsType1,
    profilePage_addPost: (newPostText: string) => null
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s1.profile}>
            <Description profileDescription={props.profileDescription}/>
            <MyPosts profilePosts={props.profilePosts} profilePage_addPost={props.profilePage_addPost}/>

        </div>
    );
}

export default Profile;