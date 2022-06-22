import React from "react";
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../redux/profile-reducer";
import {actionPropsType, state_profilePage_profilePosts_PropsType} from "../../../redux/state";
import MyPosts from "./MyPosts";


export type MyPostsPropsType = {
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number,
}
const MyPostsContainer = (props: MyPostsPropsType) => {
    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }

    let updateNewPostText = (text: string) => {
        let action = updateTextAreaActionCreator(text);
        props.dispatch(action);
    }
    //sdf
    return (<MyPosts
                updateNewPostText={updateNewPostText}
                addPost={addPost}
                profilePosts={props.profilePosts}
                updatedPostText_inTextArea={props.updatedPostText_inTextArea}
    />);
}
export default MyPostsContainer;