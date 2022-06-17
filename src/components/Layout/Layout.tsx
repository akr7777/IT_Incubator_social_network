import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Foorter/Footer";
import s from "./Layout.module.css"
import Navbar from "../Navbar/Navbar";

const Layout = (props: any) => {
    return(
        <div className={s.app_wrapper}>
            <Header />

            <Navbar friendsSidebar={props.friendsSidebar}/>

            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;