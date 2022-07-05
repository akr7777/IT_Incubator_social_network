import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
//import {HeaderComponentPropsType} from './HeaderContainer';

const Header = (props: /*HeaderComponentPropsType*/any) => {
    return (
        <header className={classes.header}>
            {/*<img src={"https://img.freepik.com/psd-gratis/logomodel-op-grijze-muur_35913-2122.jpg?w=2000"}/>*/}
            <img src={"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
            <div className={classes.login_Block}>
                { props.isAuth
                    ? props.data.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
}

export default Header;