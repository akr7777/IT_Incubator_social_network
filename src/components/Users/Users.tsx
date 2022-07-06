import React from "react";
import {usersType, userType1} from "../../redux/state";
import s from "./users.module.css";
import abstractUserPhoto from "./../../assets/images/abst_user_ava.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: usersType,//Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userid: number) => void,
    unfollow: (userid: number) => void,
    onPageChanged: (pageNumber: number) => void,
}

const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: Array<number> = [];
    const startPageIndex = (props.currentPage-10) < 1
        ? 1
        : props.currentPage-10;
    const endPageIndex = (props.currentPage+10) > pagesCount
        ? pagesCount
        : props.currentPage+10;
    for ( let i = startPageIndex; i <= endPageIndex; i++) {
        pages.push(i);
    }

    const pagesDiv = pages.map((p) => {
        return <span
            className={props.currentPage === p ? s.selected_page : s.non_selected_page}
            onClick={ () => props.onPageChanged(p) }
        >{p}</span>
    })

    return (
            <div>

                { pagesDiv }

                {
                    props.users.map((u: userType1) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : abstractUserPhoto}
                                    className={s.user_photo}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: { 'API-KEY': '00d0d9a-fef3-4b7a-b24e-af21295219e6'}
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        });

                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: { 'API-KEY': '00d0d9a-fef3-4b7a-b24e-af21295219e6'}
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {"u.location.city"}
                            </div>
                            <div>
                                {"u.location.country"}
                            </div>
                        </span>
                    </span>
                    </div>)
                }
            </div>)
    }



export default Users;