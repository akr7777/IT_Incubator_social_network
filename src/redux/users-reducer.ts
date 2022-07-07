import React from "react";
import { AnyAction } from "redux";
import { userAPI } from "../api/api";
import {userType1, usersType, statePropsType} from "./state"

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

/*let initialState = {
    users: [
        {id: 1, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Staatshoofden%2C_portretten%2C_Bestanddeelnr_925-6564.jpg",
            followed: true, name: 'Dmitry', status: "I'm happy", location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Staatshoofden%2C_portretten%2C_Bestanddeelnr_925-6564.jpg",
            followed: false, name: 'Konstantin', status: "I'm happy 2", location: {city: 'Minsk', country: 'Belarus'}},
        {id: 3, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Staatshoofden%2C_portretten%2C_Bestanddeelnr_925-6564.jpg",
            followed: true, name: 'Nikolay', status: "I'm happy 3", location: {city: 'Kiev', country: 'Ukraine'}}
    ]
}*/
let initState1 = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 2,
    isFetching: true,
    //followingInProgress: false,
    followingInProgress: [12332, 11213],
}

//type UsersInitialState = typeof initState1
type UsersInitialState = {
    users: userType1[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}

type statePropsTypeForUSER_REDUCER = {
    users: Array<userType1>
}

export const userReducer = (state: UsersInitialState = initState1, action: AnyAction) => {
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
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}

        case TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount}

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}

        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }

        default: {
            return state;
        }
    }
}

export const follow = (userid: number) => ( {type: FOLLOW, userid: userid} );
export const unfollow = (userid: number) => ( {type: UNFOLLOW, userid: userid} );
export const setUsers = (users: usersType) => ({ type: SET_USERS, users: users});
export const setCurrentPage = (p: number) => ( {type: SET_CURRENT_PAGE, currentPage: p} );
export const setTotalUsersCount = (totalCount: number) => ({ type:TOTAL_USERS_COUNT, totalUsersCount:totalCount});
export const toggleIsFetching = (isFetching: boolean) => ( { type:TOGGLE_IS_FETCHING, isFetching } );
export const toggleFollowingProgress = (isFetching: boolean, userID: number) => ( { type:TOGGLE_FOLLOWING_PROGRESS, isFetching, userID } );

export const getUsers = (currentPage: number, pageSize:number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}