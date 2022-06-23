import React from "react";
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../redux/profile-reducer";
import {actionPropsType, state_profilePage_profilePosts_PropsType, storePropsType} from "../../../redux/state";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


export type MyPostsPropsType = {
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number,
}
const MyPostsContainer = (/*props: /!*MyPostsPropsType*!/ any*/) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    let updateNewPostText = (text: string) => {
                        let action = updateTextAreaActionCreator(text);
                        store.dispatch(action);
                    }
                    return <MyPosts
                        updateNewPostText={updateNewPostText}
                        addPost={addPost}
                        profilePosts={store.getState().profilePage.profilePosts}
                        updatedPostText_inTextArea={store.getState().profilePage.updatedPostText_inTextArea}
                    />
                }
            }
        </StoreContext.Consumer>
    );
}
export default MyPostsContainer;