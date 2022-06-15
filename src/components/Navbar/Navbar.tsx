import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <div className={s.nav}>
            <div>
                <img className={s.ava_image} alt={"111"}
                     src={"https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=20&m=1226886130&s=612x612&w=0&h=POIRcyGpS6RfNP-NLG7lvnqx5stn11diDBQnQE4sDkM="}></img>
            </div>

            {/*className = { navData => navData.isActive ? s.active : s.item }*/}
            <div>
                <NavLink to="/profile" className={ ({isActive}) => isActive ? s.active_link : s.a_link}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages" className={ ({isActive}) => isActive ? s.active_link : s.a_link}>Messages</NavLink>
            </div>

        </div>
    );
}
export default Navbar;