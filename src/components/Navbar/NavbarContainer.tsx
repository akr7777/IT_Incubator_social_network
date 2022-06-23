import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {Friend} from "./Friend/Friend";
import {StoreContext} from "../../StoreContext";
import Navbar from "./Navbar";

type NavbarPropsType = {
    friendsSidebar: Array<{id: number, name: string, link: string}>
}
const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return <Navbar friendsSidebar={store.getState().friendsSidebar}/>
                }
            }
        </StoreContext.Consumer>
    );
}
export default NavbarContainer;

//-------
