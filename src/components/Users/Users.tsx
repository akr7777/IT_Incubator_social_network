import React from "react";
import s from "./users.module.css";
import abstractUserPhoto from "./../../assets/images/abst_user_ava.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../../api/api";
import { userType } from "../../redux/users-reducer";
import {User} from "./User";

type UsersPropsType = {
    users: userType[],//Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],

    follow: (userid: number) => void,
    unfollow: (userid: number) => void,
    onPageChanged: (pageNumber: number) => void,
    //followingInProgress: boolean,
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void,

}

const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: Array<number> = [];
    const startPageIndex = (props.currentPage - 10) < 1
        ? 1
        : props.currentPage - 10;
    const endPageIndex = (props.currentPage + 10) > pagesCount
        ? pagesCount
        : props.currentPage + 10;
    for (let i = startPageIndex; i <= endPageIndex; i++) {
        pages.push(i);
    }

    const pagesDiv = pages.map((p) => {
        return <span
            className={props.currentPage === p ? s.selected_page : s.non_selected_page}
            onClick={() => props.onPageChanged(p)}
        >{p}</span>
    })

    return (
        <div>
            {pagesDiv}
            <div className={s.wrapped_users_div}>
                {
                    props.users.map((u: userType) =>
                        <User user={u} isFetching={props.isFetching}
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