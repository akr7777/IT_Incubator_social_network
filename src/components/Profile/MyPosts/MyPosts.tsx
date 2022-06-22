import React, {useRef} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../redux/profile-reducer";
import {actionPropsType, state_profilePage_profilePosts_PropsType} from "../../../redux/state";


export type MyPostsPropsType = {
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number,
}
const MyPosts = (props: MyPostsPropsType) => {
    let posts = props.profilePosts;
    const postsElements = posts.map((p) => <Post id={p.id} postText={p.postText} likes={p.likes}/>);

    let newPostElement = useRef<HTMLTextAreaElement>(null);
    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }

    let updateTextArea = () => {
        let el = newPostElement.current;
        if (el !== null) {
            props.dispatch( updateTextAreaActionCreator(el.value) );

            el.setSelectionRange(0,2);
            el.focus();
            el.select();
            //el.autofocus;
            //el.setSelectionRange(el.value.length, el.value.length);
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
                          /*onfocus="this.value = this.value;"*/
                          onChange={updateTextArea}
                />
                <button className={s.button_add_new_post+" "+s.new_post_adding_item}
                        onClick={addPost}>Add a note.</button>
            </div>
            {postsElements}
        </div>
    );
}
export default MyPosts;