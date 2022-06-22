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

type ProfilePropsType = {
    profileDescription: state_ProfilePage_profileDescription_PropsType,//name: string,birthday: string, phone: string, email: string
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number
}
type ProfilePropsType1 = {
    store: storePropsType
}
const Profile = (props: ProfilePropsType1) => {
    let state = props.store.getState()
    return (
        <div className={s1.profile}>
            <Description profileDescription={state.profilePage.profileDescription}/>
            <MyPostsContainer
                /*store={props.store}*/
                profilePosts={state.profilePage.profilePosts}
                updatedPostText_inTextArea={state.profilePage.updatedPostText_inTextArea}
                dispatch={props.store.dispatch}
            />

        </div>
    );
}

export default Profile;