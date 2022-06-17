import React from "react";
import s1 from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {Description, DescriptionPropsType} from "./Description/Description";
import {ProfilePostsPropsType1} from "../../index";

type ProfilePropsType = {
    profileDescription: DescriptionPropsType,
    profilePosts: ProfilePostsPropsType1
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s1.profile}>

            <Description profileDescription={props.profileDescription}/>
            <MyPosts profilePosts={props.profilePosts}/>

        </div>
    );
}

export default Profile;