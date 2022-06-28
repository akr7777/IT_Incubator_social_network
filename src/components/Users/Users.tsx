import React from "react";
import {usersType, userType1} from "../../redux/state";
import s from "./users.module.css";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
/*import * as axios from "axios";*/
import axios from "axios";
import abstractUserPhoto from "./../../assets/images/abst_user_ava.png";

type UsersPropsType1 = {
    users: usersType,//Array<userType>
    setUsers: (users: usersType) => void
    follow: (userid: number) => void
    unfollow: (userid: number) => void
}

class Users extends React.Component<any, any> {

    /*constructor(props: any) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }*/

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged(pageNumber:number) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages: Array<number> = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        const pagesDiv = pages.map((p) => {
                return <span
                    className={this.props.currentPage === p ? s.selected_page : s.non_selected_page}
                    onClick={ (e) => { this.onPageChanged(p)/*this.props.setCurrentPage(p)*/} }
                >{p}</span>
            })

        return (
            <div>

                { pagesDiv }

                {
                    this.props.users.map((u: userType1) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : abstractUserPhoto}
                                 className={s.user_photo}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
}


export default Users;