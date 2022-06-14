import React from "react";
import s from "./Navbar.module.css";
import {Link, NavLink, BrowserRouter} from "react-router-dom";

const Navbar = () => {
    return (
        <BrowserRouter>
            <nav className={s.nav}>
                <div>
                    <img className={s.ava_image} alt={"111"}
                         src={"https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=20&m=1226886130&s=612x612&w=0&h=POIRcyGpS6RfNP-NLG7lvnqx5stn11diDBQnQE4sDkM="}></img>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <Link className={s.a} to="/profile">Profile1</Link>
                    {/*<a className={s.a} href={"/profile"}>Profile</a>*/}
                </div>
                <div className={s.item}>
                    <Link className={s.a} to="/messages">Messages1</Link>
                    {/*<a className={s.a} href={"/messages"}>Messages</a>*/}
                </div>
                <div className={s.item}>
                    <a className={s.a} href={"#s"}>News</a>
                </div>
                <div className={s.item}>
                    <a className={s.a} href={"#s"}>Music</a>
                </div>
                <br></br>
                <div className={s.item}>
                    <a className={s.a} href={"#s"}>Settings</a>
                </div>
            </nav>
        </BrowserRouter>
    );
}

export default Navbar;