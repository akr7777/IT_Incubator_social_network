import React from "react";
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../redux/profile-reducer";
import {
    actionPropsType,
    state_profilePage_profilePosts_PropsType,
    statePropsType,
    storePropsType
} from "../../../redux/state";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


export type MyPostsPropsType = {
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number,
}
/*const MyPostsContainer = (/!*props: /!*MyPostsPropsType*!/ any*!/) => {

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
}*/

let mapStateToProps = (state: statePropsType) => {
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
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;