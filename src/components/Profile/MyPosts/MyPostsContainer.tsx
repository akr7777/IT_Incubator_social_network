import React from "react";
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../redux/profile-reducer";
import {actionPropsType, state_profilePage_profilePosts_PropsType} from "../../../redux/state";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";


export type MyPostsPropsType = {
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number,
}

let mapStateToProps = (state: AppStateType) => {
    return {
       /* profilePosts: state.profilePage.profilePosts,
        updatedPostText_inTextArea: state.profilePage.updatedPostText_inTextArea*/
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text: string) => {
            let action = updateTextAreaActionCreator(text);
            dispatch(action);
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;