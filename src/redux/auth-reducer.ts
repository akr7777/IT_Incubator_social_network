import { FORM_ERROR } from "final-form";
import React from "react";
import {AnyAction} from "redux";
import { authAPI } from "../api/api";
import { ValuesType } from "../components/Login/Login";
import { dispatchType } from "./redux-store";
//import {actionPropsType} from "./state"

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';

let initialState = {
    id: 0,
    email: 'null',
    login: 'null',
    isAuth: false,
    authError: false,
    /*isFetching: true,*/
}

export type authReducerPropsType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
    authError: boolean,
}

export const authReducer = (state: authReducerPropsType = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                //isAuth: action.data.isAuth,
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                ...action.authError,
            }
        /*case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}*/
        default: {
            return state;
        }
    }
}

export const setAuthUserDataAC = (id: number, email: string, login: string, isAuth: boolean) => ( { type: SET_USER_DATA, data: {id, email, login, isAuth} });
//export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const getAuthUserDataThunkCreator = () => (dispatch: dispatchType) => {
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserDataAC(id, email, login, true));
        }
    });
}
export const setAuthError = (authError: boolean) => ({ type: SET_AUTH_ERROR, authError: authError })

export const onLoginRequest = (values:ValuesType) => (dispatch:dispatchType) => {
        authAPI.login(values).then(response => {
            //window.alert(JSON.stringify(response))
            if (response.resultCode === 0) {
                window.alert('You are Logged IN! ' + JSON.stringify(response))
                //dispatch(getAuthUserDataThunkCreator());
                getAuthUserDataThunkCreator();
                //dispatch(setAuthError(false));
                //return 0;
            } else {
                dispatch(setAuthError(true));

                /*let message = response.messages[0].length>0 ? response.messages[0] : 'some error 444'
                dispatch(submitError());*/

                window.alert('Bad credentials!!!!! ' + JSON.stringify(response))
                //return { [FORM_ERROR]: 'Login Failed 0000000' }
                //return 1;
            }
            //return 1;
        })
}

export const logoutProcedure = () => /*(dispatch:dispatchType) =>*/ {
    authAPI.logout().then(response => {
        window.alert(JSON.stringify(response))
        if (response.data.resultCode === 0) {
            window.alert('You are logged OUT!')
            //dispatch(setAuthUserDataAC(0, 'null', 'nill', false))
        }
    })
}
