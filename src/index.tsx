import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {DescriptionPropsType} from "./components/Profile/Description/Description";
import {DialogNamesPropsType, UserMessagesPropsType} from "./components/Messages/Messages";
import {MyPostsPropsType} from "./components/Profile/MyPosts/MyPosts";


let dialogsNames: Array<DialogNamesPropsType> = [
    {id: 1, name: 'Vika123'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Nika'}
];
let userMessages: Array<UserMessagesPropsType> = [
    {userID: 1, messageText: "Hi"},
    {userID: 1, messageText: "how are you???"}
];
let profileDescription: DescriptionPropsType = {name: "Dimych123", birthday: "21.02.1985", phone: "+7 (999) 123-45-67", email: "sfhskh@sifj.com"};

export type ProfilePostsPropsType1 = Array< {id: number, postText: string, likes: number} >
let profilePosts: ProfilePostsPropsType1 = [
    {id: 1, postText: "Hi, 132, this is my first post!", likes: 3},
    {id: 2, postText: "the second post!", likes: 5},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "HHHHH", likes: 1123}
];

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App
                dialogsNames = {dialogsNames}
                userMessages = {userMessages}
                profileDescription = {profileDescription}
                profilePosts = {profilePosts}
            />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
