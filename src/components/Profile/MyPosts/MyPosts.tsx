import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={s.wrapped_div}>
            <div className={s.title_text}>
                My Notes:
            </div>
            <textarea className={s.input_textarea} placeholder={"add new note here"}/>
            <button className={s.button_add_new_post}>Add a note</button>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    );
}
export default MyPosts;