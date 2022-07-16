import { FORM_ERROR } from "final-form";
import React from "react";
import {AnyAction} from "redux";
import { authAPI } from "../api/api";
import { ValuesType } from "../components/Login/Login";
import { dispatchType } from "./redux-store";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const SET_AUTH_ERROR = 'authReducer/SET_AUTH_ERROR';

let initialState = {
    id: -564,
    email: 'null123',
    login: 'null312',
    isAuth: false,
    authError: null,
}

export type authReducerPropsType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
    authError: string | null,
}

type ActionAuthReducerTypes = setAuthUserDataACType | setAuthErrorType;

export const authReducer = (state: authReducerPropsType = initialState, action: ActionAuthReducerTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.authError,
            }
        default: {
            return state;
        }
    }
}
type DataFromSetAuthDataACType = {
    id: number,
    email: string,
    login: string,
    isAuth:boolean,
}
type setAuthUserDataACType = {
    type: typeof SET_USER_DATA,
    data: DataFromSetAuthDataACType,
}
export const setAuthUserDataAC = (id: number, email: string, login: string, isAuth: boolean): setAuthUserDataACType => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
});

type setAuthErrorType = {
    type: typeof SET_AUTH_ERROR,
    authError: string | null,
}
export const setAuthError = (authError: string | null):setAuthErrorType => ({
    type: SET_AUTH_ERROR,
    authError,
})

export const getAuthUserDataThunkCreator = () => async (dispatch: dispatchType) => {
    /*return*/
    let response = await authAPI.authMe();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserDataAC(id, email, login, true));
    }
}


export const onLoginRequest = (values:ValuesType) => async (dispatch:dispatchType) => {
        /*authAPI.login(values).then(response => {
            if (response.resultCode === 0) {
                //Далее идет Дублирование кода thunk getAuthUserDataThunkCreator, т.к. не могу из одной санки вызвать другую
                authAPI.authMe().then(data => {
                    if (data.resultCode === 0) {
                        let {id, email, login} = data.data;
                        dispatch(setAuthUserDataAC(id, email, login, true));
                    }
                });
            } else {
                let message = response.messages[0].length>0 ? response.messages[0] : 'some error 444'
                dispatch(setAuthError(message));
                //window.alert('Bad credentials!!!!! ' + JSON.stringify(response))
            }
        })*/
    let response = await authAPI.login(values)
    if (response.resultCode === 0) {
        //Далее идет Дублирование кода thunk getAuthUserDataThunkCreator, т.к. не могу из одной санки вызвать другую
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserDataAC(id, email, login, true));
            }
        });
    } else {
        let message = response.messages[0].length>0 ? response.messages[0] : 'some error 444'
        dispatch(setAuthError(message));
        //window.alert('Bad credentials!!!!! ' + JSON.stringify(response))
    }

}

export const logoutProcedure = () => async (dispatch:dispatchType) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserDataAC(0, 'null', 'nill', false))
    }
}
