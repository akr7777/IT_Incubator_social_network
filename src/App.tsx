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
    dialogsNames: Array<{ id: number, name: string }>,
    userMessages: Array<{ id: number, messageText: string }>,
    profileDescription: state_ProfilePage_profileDescription_PropsType
};
type AppPropsType1 = {
    store: storePropsType
}

const App = () => {
    debugger;
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Profile />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="messages" element={<MessagesContainer />} />
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}


export default App;
