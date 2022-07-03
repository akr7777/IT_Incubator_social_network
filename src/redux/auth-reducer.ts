import React from "react";
import {AnyAction} from "redux";
import {userType1, usersType, statePropsType, actionPropsType} from "./state"

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: 0,
    email: 'null',
    login: 'null',
    isAuth: false,
    /*isFetching: true,*/
}

type authReducerPropsType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
}

export const authReducer = (state: authReducerPropsType = initialState, action: actionPropsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        /*case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}*/
        default: {
            return state;
        }
    }
}

export const setAuthUserDataAC = (id: number, email: string, login: string) => ( { type: SET_USER_DATA, data: {id, email, login} });
//export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});