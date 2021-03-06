import React, {useRef} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../redux/profile-reducer";
import {ProfilePostType} from "./../../../redux/profile-reducer";
import {Form, Field} from 'react-final-form'
import { render } from 'react-dom'
import { MyPostsPropsType } from "./MyPostsContainer";

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
        <div/* className={s.posts_wrapped_div}*/>
            <div className={s.new_post_div}>
                <NewPostForm onSubmitNewPostForm={props.onSubmitNewPostForm}/>
            </div>
            { props.profilePosts.map((p) => <Post key={p.id} id={p.id} postText={p.postText} likes={p.likes}/>) }
        </div>
    );
}


type Errortype = {
    newPostTexttextArea?: string
}
type NewPostFormPropsType = {
    onSubmitNewPostForm: (values: any) => void
}
const NewPostForm = (props: NewPostFormPropsType) => {
    return <Form
        onSubmit={props.onSubmitNewPostForm}
        validate = {
            values => {
                const errors:Errortype = {}
                if (!values.newPostTexttextArea) {
                    errors.newPostTexttextArea = 'This field is required.'
                }
                return errors
            }
        }

        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form className={s.new_post_div} onSubmit={handleSubmit}>
                <Field name={'newPostTexttextArea'}>
                    {({input,meta}) => (
                        <div className={s.new_post_div}>
                            <label>New post:</label>
                            <textarea {...input} className={s.input_textarea} />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>

                <button type="submit" disabled={submitting || pristine } className={s.button_add_new_post}> Send this post </button>
                <pre>{JSON.stringify(values)}</pre>
            </form>
            )}
    />
}


export default MyPosts;