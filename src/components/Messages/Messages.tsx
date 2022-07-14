import React, {useRef} from "react";
import s from "./Messages.module.css";
import {Navigate, NavLink} from "react-router-dom";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messages-reducer";
import {
    //actionPropsType,
    state_messagePage_userMessages_PropsType,
    state_messagesPage_dialogsNames_PropsType, state_messagesPage_PropsType
} from "../../redux/state";
import {Form, Field} from 'react-final-form'
import { render } from 'react-dom'

export type MessagesPropsType = {
    dialogsNames: Array<state_messagesPage_dialogsNames_PropsType>,
    userMessages: Array<state_messagePage_userMessages_PropsType>,
    typingNewMessageText: string,

    addNewMessage: (txt: string) => void,
    updateTextArea: (txt:string)=> void,
    isAuth: boolean,
    /*dispatch: (action: actionPropsType) => number*/
    onSubmitNewMessageForm: (values:any) => void,
}

export const Messages = (props: MessagesPropsType) => {

    const dialogsNamesElements = props.dialogsNames.map( elem => <Dialog id={elem.id} name={elem.name} img_link={elem.img_link}/> );
    const messagesElements = props.userMessages.map( elem => <Message userID={elem.userID} messageText={elem.messageText} /> );
    let newMessageTextarea = useRef<HTMLTextAreaElement>(null);

    let onAddNewMessage = () => {
        let el = newMessageTextarea.current;
        if (el !== null) {
            let txt = el.value;
            props.addNewMessage(txt);
            /*props.store.dispatch(addNewMessageActionCreator(txt));*/
            el.value = "";
        }
    }

    let onUpdateTextArea = () => {
        let el = newMessageTextarea.current;
        if (el !== null) {
            let txt = el.value;
            props.updateTextArea(txt);
            /*props.dispatch( updateNewMessageActionCreator(txt) );*/
        }
    }

    //if (!props.isAuth) return <Navigate to="/login" replace={true} />

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

/*type DialogPropsType = {
    id: number,
    name: string,
    img_link: string
}*/
const Dialog = (props: state_messagesPage_dialogsNames_PropsType) => {
    return(
        <div className={s.names}>
                <img className={s.ava_img_friends} src={props.img_link}/>
                <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

/*type MessagePropsType = {
    userID: number
    messageText: string
}*/
const Message = (props: state_messagePage_userMessages_PropsType) => {
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
