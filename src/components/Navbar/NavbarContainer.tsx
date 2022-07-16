import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {Friend} from "./Friend/Friend";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { logoutProcedure } from '../../redux/auth-reducer';
import { FriendSidebarType } from "../../redux/friendsSidebar-reducer";


export type NavbarPropsType = MapStateToPropsType & MapDispatchToPropsType;
type MapStateToPropsType = {
    friendsSidebar: Array<FriendSidebarType>,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    logoutProcedure: () => void,
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        friendsSidebar: state.friendsSidebar,
        isAuth: state.auth.isAuth,
    }
}
const NavbarContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>( mapStateToProps, {logoutProcedure} )(Navbar);
export default NavbarContainer;
