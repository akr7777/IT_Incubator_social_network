import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"
import Layout from "./components/Layout/Layout";
import {Routes, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import {state_ProfilePage_profileDescription_PropsType, storePropsType} from "./redux/state";
import MessagesContainer from "./components/Messages/MessagesContainer";
/*import {DescriptionPropsType} from "./components/Profile/Description/Description";*/

type AppPropsType = {
    dialogsNames: Array< {id: number, name: string} >,
    userMessages: Array< {id: number, messageText: string} >,
    profileDescription: state_ProfilePage_profileDescription_PropsType
};
type AppPropsType1 = {
    store: storePropsType
}

const App = (props: any) => {
    debugger;
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout friendsSidebar={props.store.getState().friendsSidebar}/>}>
                    <Route index element={<Profile
                        store={props.store}
                        /*profileDescription={props.state.profilePage.profileDescription}
                        profilePosts={props.state.profilePage.profilePosts}
                        dispatch={props.dispatch}
                        /!*profilePage_addPost={props.profilePage_addPost}*!/
                        updatedPostText_inTextArea={props.state.profilePage.updatedPostText_inTextArea}
                        /!*updateTextAreaWritingNewPost={props.updateTextAreaWritingNewPost}*!/*/
                        />}
                    />
                    <Route path="profile" element={<Profile
                        store={props.store}
                        /*profileDescription={props.state.profilePage.profileDescription}
                        profilePosts={props.state.profilePage.profilePosts}
                        dispatch={props.dispatch}
                        /!*profilePage_addPost={props.profilePage_addPost}*!/
                        updatedPostText_inTextArea={props.state.profilePage.updatedPostText_inTextArea}
                        /!*updateTextAreaWritingNewPost={props.updateTextAreaWritingNewPost}*!/*/
                    />}
                    />
                    <Route path="messages" element={<MessagesContainer
                        store={props.store}
                        /*dialogsNames={props.state.messagesPage.dialogsNames}
                        userMessages={props.state.messagesPage.userMessages}
                        typingNewMessageText={props.state.messagesPage.typingNewMessageText}
                        dispatch={props.dispatch}*/
                        />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}


export default App;
