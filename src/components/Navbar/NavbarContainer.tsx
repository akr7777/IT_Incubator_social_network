import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {Friend} from "./Friend/Friend";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import { AppStateType } from "../../redux/redux-store";

type NavbarPropsType = {
    friendsSidebar: Array<{id: number, name: string, link: string}>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        friendsSidebar: state.friendsSidebar
    }
}
const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;

//-------
