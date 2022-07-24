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

export const User: React.FC<UserPropsType> = ({
                                                  user,
                                                  isFetching,
                                                  followingInProgress,
                                                  follow,
                                                  unfollow,
                                                  toggleFollowingProgress
                                              }) => {
    return <div className={s.one_user_div} key={user.id}>
        <div>
            <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : abstractUserPhoto}
                     className={s.user_photo}/>
            </NavLink>
        </div>
        <div>
            {
                user.followed
                    ? <button className={s.followButton}
                              disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id);
                              }}>Unfollow</button>
                    : <button className={s.followButton}
                              disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id);
                              }}>Follow</button>
            }
        </div>
        <div className={s.u_item}>
                {user.name}
                {user.status}
        </div>
    </div>
}
