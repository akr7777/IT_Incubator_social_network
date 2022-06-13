import React from "react";
import s from "./Post.module.css";

const Post = (props: any) => {
    return (
        <div className={s.post_div}>
            <img
                className={s.post_image}
                src={"https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=20&m=1226886130&s=612x612&w=0&h=POIRcyGpS6RfNP-NLG7lvnqx5stn11diDBQnQE4sDkM="}
            >
            </img>

            {props.message}

        </div>

    );
}

export default Post;