import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"
import Layout from "./components/Layout/Layout";
import {Routes, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import {state_ProfilePage_profileDescription_PropsType} from "./redux/state";
/*import {DescriptionPropsType} from "./components/Profile/Description/Description";*/

type AppPropsType = {
    dialogsNames: Array< {id: number, name: string} >,
    userMessages: Array< {id: number, messageText: string} >,
    profileDescription: state_ProfilePage_profileDescription_PropsType
};

const App = (props: any) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout friendsSidebar={props.state.friendsSidebar}/>}>
                    <Route index element={<Profile
                        profileDescription={props.state.profilePage.profileDescription}
                        profilePosts={props.state.profilePage.profilePosts}
                        dispatch={props.dispatch}
                        /*profilePage_addPost={props.profilePage_addPost}*/
                        updatedPostText_inTextArea={props.state.profilePage.updatedPostText_inTextArea}
                        /*updateTextAreaWritingNewPost={props.updateTextAreaWritingNewPost}*/
                        />}
                    />
                    <Route path="profile" element={<Profile
                        profileDescription={props.state.profilePage.profileDescription}
                        profilePosts={props.state.profilePage.profilePosts}
                        dispatch={props.dispatch}
                        /*profilePage_addPost={props.profilePage_addPost}*/
                        updatedPostText_inTextArea={props.state.profilePage.updatedPostText_inTextArea}
                        /*updateTextAreaWritingNewPost={props.updateTextAreaWritingNewPost}*/
                    />}
                    />
                    <Route path="messages" element={<Messages
                        dialogsNames={props.state.messagesPage.dialogsNames}
                        userMessages={props.state.messagesPage.userMessages}
                        typingNewMessageText={props.state.messagesPage.typingNewMessageText}
                        dispatch={props.dispatch}
                        />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}


export default App;
