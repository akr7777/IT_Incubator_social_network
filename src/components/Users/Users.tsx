import React from "react";
import {usersType, userType1} from "../../redux/state";
import s from "./users.module.css";
import abstractUserPhoto from "./../../assets/images/abst_user_ava.png";

/*type UsersPropsType = {
    users: usersType,//Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}
type UsersStateType = {
    /!*setUsers: (users: usersType) => void,*!/
    follow: (userid: number) => void,
    unfollow: (userid: number) => void,
    onPageChanged: (pageNumber: number) => void,
    /!*setCurrentPage: (p: number) => void,
    setTotalUsersCount: (totalCount: number) => void,*!/
}*/

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

    for (let i = 1; i <= pagesCount; i++) {
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
                            <img src={u.photos.small !== null ? u.photos.small : abstractUserPhoto}
                                 className={s.user_photo}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
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