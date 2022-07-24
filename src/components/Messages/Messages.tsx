import React, {useRef} from "react";
import s from "./Messages.module.css";
import {Navigate, NavLink} from "react-router-dom";
import {addNewMessageActionCreator, dialogsNamesType, updateNewMessageActionCreator, userMessagesType} from "../../redux/messages-reducer";
import {Form, Field} from 'react-final-form'
import { render } from 'react-dom'
import { MessagesPropsType } from "./MessagesContainer";

export const Messages = (props: MessagesPropsType) => {
    const dialogsNamesElements = props.dialogsNames.map( elem => <Dialog key={elem.id} id={elem.id} name={elem.name} img_link={elem.img_link}/> );
    const messagesElements = props.userMessages.map( (elem,index) => <Message key={index} userID={elem.userID} messageText={elem.messageText} /> );
    let newMessageTextarea = useRef<HTMLTextAreaElement>(null);

    let onAddNewMessage = () => {
        let el = newMessageTextarea.current;
        if (el !== null) {
            let txt = el.value;
            props.addNewMessage(txt);
            el.value = "";
        }
    }

    let onUpdateTextArea = () => {
        let el = newMessageTextarea.current;
        if (el !== null) {
            let txt = el.value;
            props.updateTextArea(txt);
        }
    }

    return (
        <div className={s.messages}>
            <div className={s.dialogItems}>
                { dialogsNamesElements }
            </div>
            <div className={s.message}>

                { messagesElements }
                <NewMessageForm onSubmitNewMessageForm={props.onSubmitNewMessageForm}/>

            </div>
        </div>
    );
}

const Dialog = (props: dialogsNamesType) => {
    return(
        <div className={s.names}>
                <img className={s.ava_img_friends} src={props.img_link}/>
                <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props: userMessagesType) => {
    let messageText1 = props.userID == 1 ? <div className={s.msg_left}>{props.messageText}</div> : <div className={s.msg_rigth}>{props.messageText}</div>
    return(
        <div>
            {messageText1}
        </div>
    );
}

type ErrorsType = {
    newMessageTextTextArea?: string
}
type NewMessageFormPropsType = {
    onSubmitNewMessageForm: (values: any) => void
}
const NewMessageForm = (props: NewMessageFormPropsType) => {
    return <Form
        onSubmit={props.onSubmitNewMessageForm}
        validate = {
            values => {
                const errors:ErrorsType = {}
                if (!values.newMessageTextTextArea) {
                    errors.newMessageTextTextArea = 'This field is required.'
                }
                return errors
            }
        }

        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form className={s.add_new_message_div} onSubmit={handleSubmit}>
                <Field name={'newMessageTextTextArea'}>
                    {({input,meta}) => (
                        <div className={s.add_new_message_div}>
                            <label>New message:</label>
                            <textarea {...input} className={s.new_message_textarea} />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>

                <button type="submit" disabled={submitting || pristine} className={s.new_message_button}> Send new MSG </button>
                <pre>{JSON.stringify(values)}</pre>
            </form>
        )}
    />
}

export default Messages;
