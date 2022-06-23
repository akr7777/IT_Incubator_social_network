import React, {useRef} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../redux/profile-reducer";
import {actionPropsType, state_profilePage_profilePosts_PropsType} from "../../../redux/state";


export type MyPostsPropsType = {
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    //dispatch: (action: actionPropsType) => number,
    addPost: () => void,
    updateNewPostText: (text: string) => void
}
const MyPosts = (props: MyPostsPropsType) => {


    let newPostElement = useRef<HTMLTextAreaElement>(null);
    let onAddPost = () => {
        props.addPost();
    }

    let onUpdate = () => {
        let el = newPostElement.current;
        if (el !== null) {
            props.updateNewPostText(el.value);
        }

    }

    return (
        <div className={s.posts_wrapped_div}>
            <div className={s.new_post_div}>
                <h3 className={s.new_post_adding_item}>My Notes:</h3>
                <textarea className={s.input_textarea+" "+s.new_post_adding_item}
                          id="textarea1"
                          placeholder={"add new note here"}
                          ref={newPostElement}
                          value={props.updatedPostText_inTextArea}
                          onChange={onUpdate}
                />
                <button className={s.button_add_new_post+" "+s.new_post_adding_item}
                        onClick={onAddPost}>Add a note.</button>
            </div>
            { props.profilePosts.map((p) => <Post id={p.id} postText={p.postText} likes={p.likes}/>) }
        </div>
    );
}
export default MyPosts;