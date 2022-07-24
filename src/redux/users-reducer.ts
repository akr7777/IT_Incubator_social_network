import React from "react";
import {AnyAction} from "redux";
import {userAPI} from "../api/api";
import {dispatchType} from "./redux-store";
import * as stream from "stream";

const FOLLOW = 'usersReducer/FOLLOW';
const UNFOLLOW = 'usersReducer/UNFOLLOW';
const SET_USERS = 'usersReducer/SET_USERS';
const SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'usersReducer/TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'usersReducer/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'usersReducer/TOGGLE_FOLLOWING_PROGRESS';


//types
export type locationType = {
    city: string,
    country: string
}
type userPhotosType = {
    small: string,
    large: string,
}
export type userType = {
    id: number,
    name: string,
    uniqueUrlName: string,
    status?: string,
    photos: userPhotosType,
    followed: boolean /*Is current authorized user following returned user. If current user is anonymous then value always will be false*/
}
export type UsersInitialStateType = {
    users: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}
type userReducerActionType = FollowSuccessType | SetUsersType | SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType | ToggleFollowingProgressType;
let initState1 = {
    users: [],
    pageSize: 7,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [0, 0],
}

export const userReducer = (state: UsersInitialStateType = initState1, action: userReducerActionType): UsersInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: mappedUsers(state.users, action, true)/*state.users.map((u: userType) => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u;
                }),*/
            }

        case UNFOLLOW:
            return {
                ...state,
                users: mappedUsers(state.users, action, false)/*state.users.map((u: userType) => {
                    if (u.id === action.userid) {
                        return {...u, followed: false}
                    }
                    return u;
                }),*/
            }

        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

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

const mappedUsers = (users:userType[], action: FollowSuccessType, toFollow: boolean) => {
    return users.map((u: userType) => {
        if (u.id === action.userid) {
            return {...u, followed: toFollow}
        }
        return u;
    });
}

//Action Creators Types:
type FollowSuccessType = { type: typeof FOLLOW | typeof UNFOLLOW, userid: number};
type SetUsersType = {type: typeof SET_USERS, users: Array<userType>};
type SetCurrentPageType = {type: typeof SET_CURRENT_PAGE, currentPage: number};
type SetTotalUsersCountType = {type: typeof TOTAL_USERS_COUNT, totalUsersCount: number};
type ToggleIsFetchingType = {type: typeof TOGGLE_IS_FETCHING, isFetching: boolean};
type ToggleFollowingProgressType = {type: typeof TOGGLE_FOLLOWING_PROGRESS, isFetching: boolean, userID: number}
export const followSuccess = (userid: number):FollowSuccessType => ({type: FOLLOW, userid: userid});
export const unfollowSuccess = (userid: number):FollowSuccessType => ({type: UNFOLLOW, userid: userid});
export const setUsers = (users: userType[]):SetUsersType => ({type: SET_USERS, users: users});
export const setCurrentPage = (p: number):SetCurrentPageType=> ({type: SET_CURRENT_PAGE, currentPage: p});
export const setTotalUsersCount = (totalCount: number):SetTotalUsersCountType => ({type: TOTAL_USERS_COUNT, totalUsersCount: totalCount});
export const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching: boolean, userID: number):ToggleFollowingProgressType => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userID
});

//export type UserActionsType = ReturnType<typeof followSuccess>

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: dispatchType) => {
        dispatch(toggleIsFetching(true));
        let data = await userAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setCurrentPage(currentPage));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

type FollowUnFollowDataType = {
    resultCode: number,
    messages: Array<string>,
    data: object,
}
const followUnfollow = async (userID: number,
                        dispatch: dispatchType,
                        apiMethod: (userId: number) => Promise<any>,//FollowUnFollowDataType,
                        actionCreator: (userID: number) => { type: string; userid: number; },//{ type: typeof FOLLOW, userid: number }
) => {
    dispatch(toggleFollowingProgress(true, userID));
    let data = await apiMethod(userID);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID));
    }
    dispatch(toggleFollowingProgress(false, userID));
}

export const follow = (userID: number) => {
    return async (dispatch: dispatchType) => {
        followUnfollow(userID, dispatch, userAPI.follow.bind(userAPI), followSuccess);
    }
}
export const unfollow = (userID: number) => {
    return async (dispatch: dispatchType) => {
        followUnfollow(userID, dispatch, userAPI.unfollow.bind(userAPI), unfollowSuccess);
    }
}
/*
export const follow = (userID: number) => {
    return async (dispatch: dispatchType) => {
        dispatch(toggleFollowingProgress(true, userID));
        let data = await userAPI.follow(userID);
        if (data.resultCode === 0) {
            dispatch(followSuccess(userID))
        }
        dispatch(toggleFollowingProgress(false, userID));
    }
}
export const unfollow = (userID: number) => {
    return async (dispatch: dispatchType) => {
        dispatch(toggleFollowingProgress(true, userID));
        let data = await userAPI.unfollow(userID);
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userID))
        }
        dispatch(toggleFollowingProgress(false, userID));
    }
}*/
