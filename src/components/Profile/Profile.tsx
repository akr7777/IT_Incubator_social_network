import React from "react";
import s1 from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Description from "./Description/Description";

const Profile = () => {
    return (
        <div className={s1.profile}>

            <Description/>
            <MyPosts/>

        </div>
    );
}

export default Profile;