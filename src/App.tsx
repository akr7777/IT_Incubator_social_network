import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Messages from "./components/Messages/Messages";


const App = () => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>

            <Router>
                <Routes>
                    <Route path="/" element={<Profile/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/messages" element={<Messages/>} />

                </Routes>
            </Router>


        </div>
    );
}


export default App;
