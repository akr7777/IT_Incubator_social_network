import React from "react";
import {usersType, userType} from "../../redux/state";
import s from "./users.module.css";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

type UsersPropsType1 = {
    users: usersType,//Array<userType>
    setUsers: (users: usersType) => void
    follow: (userid: number) => void
    unfollow: (userid: number) => void
}

const Users = (props: any) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Staatshoofden%2C_portretten%2C_Bestanddeelnr_925-6564.jpg",
                followed: true, name: 'Dmitry', status: "I'm happy", location: {city: 'Moscow', country: 'Russia'}},
            {id: 2, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Staatshoofden%2C_portretten%2C_Bestanddeelnr_925-6564.jpg",
                followed: false, name: 'Konstantin', status: "I'm happy 2", location: {city: 'Minsk', country: 'Belarus'}},
            {id: 3, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Staatshoofden%2C_portretten%2C_Bestanddeelnr_925-6564.jpg",
                followed: true, name: 'Nikolay', status: "I'm happy 3", location: {city: 'Kiev', country: 'Ukraine'}}
        ]);
    }
    /*if (props.users.length !== 0) {
        props.users.map((u: userType) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.user_photo}/>
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
                                {u.location.city}
                            </div>
                            <div>
                                {u.location.country}
                            </div>
                        </span>
                    </span>
        </div>);
    }*/

    return (
        <div>
            {
                props.users.users.map((u: userType) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.user_photo}/>
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
                                {u.location.city}
                            </div>
                            <div>
                                {u.location.country}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;