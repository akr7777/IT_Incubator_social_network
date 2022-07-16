import React from "react";
import s from "./users.module.css";
import abstractUserPhoto from "./../../assets/images/abst_user_ava.png";//"./../../assets/images/abst_user_ava.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../../api/api";
import {userType} from "../../redux/users-reducer";

type UserPropsType = {
    user: userType,
    isFetching: boolean,
    followingInProgress: number[],

    follow: (userid: number) => void,
    unfollow: (userid: number) => void,
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void,

}

export const User:React.FC<UserPropsType> = ( {user, isFetching, followingInProgress, follow, unfollow, toggleFollowingProgress} ) => {
    return <div className={s.one_user_div} key={user.id}>
        <span key={user.id.toString() + "_1"}>
            <div key={user.id.toString() + "_11"}>
                <NavLink to={"/profile/" + user.id} key={user.id.toString() + "_111_"}>
                    <img src={user.photos.small !== null ? user.photos.small : abstractUserPhoto}
                         className={s.user_photo}/>
                </NavLink>
            </div>
            <div key={user.id.toString() + "_12"}>
                {
                    user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id);
                                  }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id);
                                  }}>Follow</button>
                }
            </div>
        </span>
<span key={user.id.toString() + "_2"}>
            <span>
                <div>
                    {user.name}
                </div>
                <div key={user.id.toString() + "_212"}>
                    {user.status}
                </div>
            </span>
            <span key={user.id.toString() + "_22"}>
                <div key={user.id.toString() + "_221"}>
                    {"u.location.city"}
                </div>
                <div key={user.id.toString() + "_222"}>
                    {"u.location.country"}
                </div>
            </span>
        </span>
        </div>
}
