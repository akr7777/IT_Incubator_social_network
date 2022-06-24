import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {Friend} from "./Friend/Friend";

type NavbarPropsType = {
    friendsSidebar: Array<{id: number, name: string, link: string}>
}
const Navbar = (props: NavbarPropsType) => {
    const friends = props.friendsSidebar.map(elem => <Friend key={elem.id} name={elem.name} link={elem.link}/> );

    return(
        <div className={s.nav}>
            <div>
                <img className={s.ava_image} alt={"111"}
                     src={"https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=20&m=1226886130&s=612x612&w=0&h=POIRcyGpS6RfNP-NLG7lvnqx5stn11diDBQnQE4sDkM="}></img>
            </div>

            <div>
                <NavLink to="/profile" className={ ({isActive}) => isActive ? s.active_link : s.a_link}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages" className={ ({isActive}) => isActive ? s.active_link : s.a_link}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={ ({isActive}) => isActive ? s.active_link : s.a_link}>Users</NavLink>
            </div>

            <div className={s.friends_div}>
                <div>
                    <NavLink to="/#friends" className={ ({isActive}) => isActive ? s.active_link : s.a_link}>FRIENDS</NavLink>
                </div>
                <div className={s.friends_ava_div}>
                    {friends}
                </div>
            </div>

        </div>
    );
}
export default Navbar;