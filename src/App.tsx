import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import {Routes, Route, Navigate} from "react-router-dom";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
//import {state_ProfilePage_profileDescription_PropsType, storePropsType} from "./redux/state";
//import UsersAPIComponent from "./components/Users/UsersAPIComponent";
import {UsersContainer} from "./components/Users/UsersContainer";
/*import {DescriptionPropsType} from "./components/Profile/Description/Description";*/
import ProfileContainer from './components/Profile/ProfileContainer';

/*type AppPropsType = {
    dialogsNames: Array<{ id: number, name: string }>,
    userMessages: Array<{ id: number, messageText: string }>,
    profileDescription: state_ProfilePage_profileDescription_PropsType
};*/
/*type AppPropsType1 = {
    store: storePropsType
}*/

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<UsersContainer />} />

                    <Route path="profile" element={<Navigate to={'/profile/2'}/>} />
                    <Route path="profile/:id" element={<ProfileContainer />} />
                    {/*<Route path="profile" element={<ProfileContainer />} >
                        <Route path=':id' element={<ProfileContainer />} />
                    </Route>*/}
                    <Route path="messages" element={<MessagesContainer />} />
                    <Route path="users" element={<UsersContainer />} />
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}


export default App;
