import React from "react";
import s from "./users.module.css";
import abstractUserPhoto from "./../../assets/images/abst_user_ava.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../../api/api";
import { userType } from "../../redux/users-reducer";

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

            {
                props.users.map((u: userType) => <div key={u.id}>
                    <span key={u.id.toString() + "_1"}>
                        <div key={u.id.toString() + "_11"}>
                            <NavLink to={"/profile/" + u.id} key={u.id.toString() + "_111_"}>
                                <img src={u.photos.small !== null ? u.photos.small : abstractUserPhoto}
                                     className={s.user_photo}/>
                            </NavLink>
                        </div>
                        <div key={u.id.toString() + "_12"}>
                            {
                                u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.unfollow(u.id);
                                        /*props.toggleFollowingProgress(true, u.id);
                                        userAPI.unfollow(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });*/
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id);
                                        /*props.toggleFollowingProgress(true, u.id);
                                        userAPI.follow(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });*/
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span key={u.id.toString() + "_2"}>
                        <span key={u.id.toString() + "_21"}>
                            <div key={u.id.toString() + "_211"}>
                                {u.name}
                            </div>
                            <div key={u.id.toString() + "_212"}>
                                {u.status}
                            </div>
                        </span>
                        <span key={u.id.toString() + "_22"}>
                            <div key={u.id.toString() + "_221"}>
                                {"u.location.city"}
                            </div>
                            <div key={u.id.toString() + "_222"}>
                                {"u.location.country"}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>)
}


export default Users;