import React from "react";
import {addPostActionCreator, ProfilePostType, updateTextAreaActionCreator} from "../../../redux/profile-reducer";
//import {actionPropsType, state_profilePage_profilePosts_PropsType} from "../../../redux/state";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";

//types
type MapStateToPropsType = {
    profilePosts: Array<ProfilePostType>,
    updatedPostText_inTextArea: string,
}
type MapDispatchToPropsType = {
    addPost: () => void,
    updateNewPostText: (text: string) => void,
    onSubmitNewPostForm: (values: any) => void,
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType) => {
    return {
        profilePosts: state.profilePage.profilePosts,
        updatedPostText_inTextArea: state.profilePage.updatedPostText_inTextArea
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
        },
        onSubmitNewPostForm: (values: any) => {
            window.alert('OnSumbitNewPostForm' + JSON.stringify(values))
            let text = values.newPostTexttextArea;
            let action = updateTextAreaActionCreator(text);
            dispatch(action);
            dispatch(addPostActionCreator());
        },
    }
}
const MyPostsContainer:React.ComponentType = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;