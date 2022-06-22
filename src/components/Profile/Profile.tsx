import React from "react";
import s1 from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {Description} from "./Description/Description";
import {
    actionPropsType,
    state_ProfilePage_profileDescription_PropsType,
    state_profilePage_profilePosts_PropsType
} from "../../redux/state";

type ProfilePropsType = {
    profileDescription: state_ProfilePage_profileDescription_PropsType,//name: string,birthday: string, phone: string, email: string
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s1.profile}>
            <Description profileDescription={props.profileDescription}/>
            <MyPosts
                profilePosts={props.profilePosts}
                updatedPostText_inTextArea={props.updatedPostText_inTextArea}
                dispatch={props.dispatch}
            />

        </div>
    );
}

export default Profile;