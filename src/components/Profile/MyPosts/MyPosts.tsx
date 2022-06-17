import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

export type MyPostsPropsType = {
    profilePosts: Array< {id: number, postText: string, likes: number} >
}
const MyPosts = (props: MyPostsPropsType) => {
    let posts = props.profilePosts;
    const postsElements = posts.map( (p) => <Post id={p.id} postText={p.postText} likes={p.likes}/>);

    return (
        <div className={s.posts_wrapped_div}>
            <div className={s.new_post_div}>
            <h3>My Notes:</h3>
            <textarea className={s.input_textarea} placeholder={"add new note here"}/>
            <button className={s.button_add_new_post}>Add a note</button>
            </div>
            {postsElements}
        </div>
    );
}
export default MyPosts;