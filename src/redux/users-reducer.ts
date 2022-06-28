import React from "react";
import {userType1, usersType, statePropsType} from "./state"

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Staatshoofden%2C_portretten%2C_Bestanddeelnr_925-6564.jpg",
            followed: true, name: 'Dmitry', status: "I'm happy", location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Staatshoofden%2C_portretten%2C_Bestanddeelnr_925-6564.jpg",
            followed: false, name: 'Konstantin', status: "I'm happy 2", location: {city: 'Minsk', country: 'Belarus'}},
        {id: 3, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Staatshoofden%2C_portretten%2C_Bestanddeelnr_925-6564.jpg",
            followed: true, name: 'Nikolay', status: "I'm happy 3", location: {city: 'Kiev', country: 'Ukraine'}}
    ]
}
let initState1 = {
    "users": []
}

type statePropsTypeForUSER_REDUCER = {
    users: Array<userType1>
}

export const userReducer = (state: any = initState1/*= initialState*/, action: any) => {
    debugger;
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (u: userType1) => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( (u: userType1) => {
                    if (u.id === action.userid) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            }

        case SET_USERS:
            return { ...state, users: [ ...state.users, ...action.users ] }

        default: {
            return state;
        }
    }
}

export const followAC = (userid: number) => ( {type: FOLLOW, userid: userid} );
export const unfollowAC = (userid: number) => ( {type: UNFOLLOW, userid: userid} );
export const setUsersAC = (users: usersType) => ({ type: SET_USERS, users: users});