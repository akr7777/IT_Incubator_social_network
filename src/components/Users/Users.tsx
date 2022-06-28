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

    constructor(props: any) {
        super(props);

        //alert('New users');

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (<div>
            {
                this.props.users.map((u: userType1) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={ u.photos.small !== null ? u.photos.small : abstractUserPhoto} className={s.user_photo}/>
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