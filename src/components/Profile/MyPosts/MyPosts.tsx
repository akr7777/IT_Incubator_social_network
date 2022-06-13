import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div>
            <div className={s.wrapped_div}>
                <div className={s.title_text}>
                    My Notes:
                </div>
                <textarea className={s.input_textarea} placeholder={"add new note here"}/>
                <button className={s.button_add_new_post}>Add a note</button>
            </div>
            <div className={s.myposts}>
                <Post message={"Hi, this is my first post!"}/>
                <Post message={"the second post!"}/>
            </div>
        </div>

    );
}
export default MyPosts;