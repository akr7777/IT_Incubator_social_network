import React from "react";
import s from "./users.module.css";
import abstractUserPhoto from "./../../assets/images/abst_user_ava.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../../api/api";
import {userType} from "../../redux/users-reducer";
import {User} from "./User";
import Paginator from "./Paginator";

type UsersPropsType = {
    users: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],

    follow: (userid: number) => void,
    unfollow: (userid: number) => void,
    onPageChanged: (pageNumber: number) => void,
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void,

}

const Users = (props: UsersPropsType) => {
    return (
        <div className={s.userPageWrapping}>
            <div className={s.paginatorDiv}>
                <Paginator
                    totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                />
            </div>
            <div className={s.wrapped_div_for_users}>
                {
                    props.users.map((u: userType) =>
                        <User key={u.id}
                              user={u} isFetching={props.isFetching}
                              followingInProgress={props.followingInProgress}
                              follow={props.follow}
                              unfollow={props.unfollow}
                              toggleFollowingProgress={props.toggleFollowingProgress}
                        />
                    )
                }
            </div>

        </div>)
}


export default Users;