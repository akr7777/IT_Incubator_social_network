import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";
import {HeaderComponentPropsType} from './HeaderContainer';

const Header = (props: HeaderComponentPropsType) => {
    return (
        <header className={classes.header}>
            <div>
                <img
                src={"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
            </div>
            {/*<div className={classes.login_Block}>
                NAME:
                { props.isAuth && props.login
                    ? <input readOnly={true} value={props.login}/>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>*/}
        </header>
    );
}

export default Header;