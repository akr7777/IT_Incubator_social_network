import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {Friend} from "./Friend/Friend";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {statePropsType} from "../../redux/state";

type NavbarPropsType = {
    friendsSidebar: Array<{id: number, name: string, link: string}>
}
/*const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return <Navbar friendsSidebar={store.getState().friendsSidebar}/>
                }
            }
        </StoreContext.Consumer>
    );
}*/
let mapStateToProps = (state: statePropsType) => {
    return {
        friendsSidebar: state.friendsSidebar
    }
}
const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;

//-------
