import React, {useRef} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

export type MyPostsPropsType = {
    profilePosts: Array<{ id: number, postText: string, likes: number }>,
    profilePage_addPost: (newPostText: string) => null
}
const MyPosts = (props: MyPostsPropsType) => {
    let posts = props.profilePosts;
    const postsElements = posts.map((p) => <Post id={p.id} postText={p.postText} likes={p.likes}/>);

    /*let newPostElement = React.createRef();*/
    /*let newPostElement = useRef<HTMLTextAreaElement>(null);*/

    let newPostElement = useRef<HTMLTextAreaElement>(null);
    let addPost = () => {
        let txtarea = newPostElement.current !== null ? newPostElement.current.value : "";
        alert(txtarea);
        props.profilePage_addPost(txtarea);
    }

    return (
        <div className={s.posts_wrapped_div}>
            <div className={s.new_post_div}>
                <h3 className={s.new_post_adding_item}>My Notes:</h3>
                <textarea className={s.input_textarea+" "+s.new_post_adding_item} id="textarea1" placeholder={"add new note here"}
                          ref={newPostElement}/>
                <button className={s.button_add_new_post+" "+s.new_post_adding_item} onClick={addPost}>Add a note</button>
            </div>
            {postsElements}
        </div>
    );
}
export default MyPosts;