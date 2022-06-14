import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import Footer from "./components/Foorter/Footer";


const App = (props: any) => {
    return (

        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>

            <div>
                <BrowserRouter>
                    <Routes>
                        {/*<Route path="/" element={<App/>}>
                            <Route index element={<Profile />} />
                            <Route path="profile" element={<Profile/>}/>
                            <Route path="messages" element={<Messages/>}/>
                        </Route>*/}

                        <Route path="profile" element={<Profile/>}/>
                        <Route path="messages" element={<Messages/>}/>

                    </Routes>
                </BrowserRouter>
            </div>

            <Footer/>
        </div>

    );
}


export default App;
