import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"
import Layout from "./components/Layout/Layout";
import {Routes, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";

const App = (props: any) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Profile />}/>
                    <Route path="profile" element={<Profile />}/>
                    <Route path="messages" element={<Messages />}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}


export default App;
