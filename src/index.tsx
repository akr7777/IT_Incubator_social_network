import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {DescriptionPropsType} from "./components/Profile/Description/Description";
import {DialogNamesPropsType, UserMessagesPropsType} from "./components/Messages/Messages";
import {MyPostsPropsType} from "./components/Profile/MyPosts/MyPosts";
import state from "./redux/state";

//data here

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App
                state = {state}
                /*dialogsNames = {dialogsNames}
                userMessages = {userMessages}
                profileDescription = {profileDescription}
                profilePosts = {profilePosts}*/
            />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
