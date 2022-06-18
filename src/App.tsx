import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"
import Layout from "./components/Layout/Layout";
import {Routes, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import {DescriptionPropsType} from "./components/Profile/Description/Description";

/*let dialogsNames = [
    {id: 1, name: 'Vika'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Nika'}
];
let userMessages = [
    {userID: 1, messageText: "Hi"},
    {userID: 1, messageText: "how are you???"}
];
let profileDescription: DescriptionPropsType = {name: "Dimych", birthday: "21.02.1985", phone: "+7 (999) 123-45-67", email: "sfhskh@sifj.com"};
let profilePosts = [
    {id: 1, postText: "Hi, this is my first post!", likes: 3},
    {id: 2, postText: "the second post!", likes: 5},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "HHHHH", likes: 1123}
];*/

type AppPropsType = {
    dialogsNames: Array< {id: number, name: string} >,
    userMessages: Array< {id: number, messageText: string} >,
    profileDescription: DescriptionPropsType
};

const App = (props: any) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout friendsSidebar={props.state.friendsSidebar}/>}>
                    <Route index element={<Profile
                        profileDescription={props.state.profilePage.profileDescription}
                        profilePosts={props.state.profilePage.profilePosts}
                        profilePage_addPost={props.profilePage_addPost}
                        />}
                    />
                    <Route path="profile" element={<Profile
                        profileDescription={props.state.profilePage.profileDescription}
                        profilePosts={props.state.profilePage.profilePosts}
                        profilePage_addPost={props.profilePage_addPost}
                        />}
                    />
                    <Route path="messages" element={<Messages
                        dialogsNames={props.state.messagesPage.dialogsNames}
                        userMessages={props.state.messagesPage.userMessages}
                        />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}


export default App;
