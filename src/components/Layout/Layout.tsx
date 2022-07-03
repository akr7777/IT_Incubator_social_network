import React from "react";
import {Outlet} from "react-router-dom";
import HeaderContainer from "../Header/HeaderContainer";
import Footer from "../Foorter/Footer";
import s from "./Layout.module.css"
import Navbar from "../Navbar/Navbar";
import NavbarContainer from "../Navbar/NavbarContainer";

const Layout = () => {
    return(
        <div className={s.app_wrapper}>
            <HeaderContainer />
            <NavbarContainer />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;