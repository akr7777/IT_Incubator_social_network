import React from "react";
import { AnyAction } from "redux";
import { userAPI } from "../api/api";
import { dispatchType } from "./redux-store";
import {userType} from "./state"

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


export type UsersInitialStateType = {
    users: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
    //isAuth: boolean,
}

/*type statePropsTypeForUSER_REDUCER = {
    users: Array<userType1>
}*/

let initState1 = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [12332, 11213],
    isAuth: false
}



export const userReducer = (state: UsersInitialStateType = initState1, action: AnyAction):UsersInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (u: userType) => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( (u: userType) => {
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

export const followSuccess = (userid: number) => ( {type: FOLLOW, userid: userid} as const);
export const unfollowSuccess = (userid: number) => ( {type: UNFOLLOW, userid: userid} );
export const setUsers = (users: userType[]) => ({ type: SET_USERS, users: users});
export const setCurrentPage = (p: number) => ( {type: SET_CURRENT_PAGE, currentPage: p} );
export const setTotalUsersCount = (totalCount: number) => ({ type:TOTAL_USERS_COUNT, totalUsersCount:totalCount});
export const toggleIsFetching = (isFetching: boolean) => ( { type:TOGGLE_IS_FETCHING, isFetching } );
export const toggleFollowingProgress = (isFetching: boolean, userID: number) => ( { type:TOGGLE_FOLLOWING_PROGRESS, isFetching, userID } );

//export type UserActionsType = ReturnType<typeof followSuccess>

export const getUsers = (currentPage: number, pageSize:number) => {
    return (dispatch: dispatchType) => {
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setCurrentPage(currentPage));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userID: number) => {
    return (dispatch: dispatchType) => {
        dispatch(toggleFollowingProgress(true, userID));
        userAPI.follow(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID));
        });
    }
}
export const unfollow = (userID: number) => {
    return (dispatch: dispatchType) => {
        dispatch(toggleFollowingProgress(true, userID));
        userAPI.unfollow(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID));
        });
    }
}