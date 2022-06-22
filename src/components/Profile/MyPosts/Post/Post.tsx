import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
    id: number,
    postText: string,
    likes: number
}
const Post = (props: PostPropsType) => {
    return (
        <div className={s.post_div25}>
            <div className={s.post_image}>
                <img className={s.post_image} src={"https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=20&m=1226886130&s=612x612&w=0&h=POIRcyGpS6RfNP-NLG7lvnqx5stn11diDBQnQE4sDkM="} />
            </div>
            <div className={s.post_message_text}>
                {props.postText}
            </div>
            <div className={s.post_likes}>
                Likes: {props.likes}
            </div>
        </div>

    );
}

export default Post;