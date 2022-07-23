import { FORM_ERROR } from "final-form";
import React from "react";
import {AnyAction} from "redux";
import { authAPI, Security } from "../api/api";
import { ValuesType } from "../components/Login/Login";
import { dispatchType } from "./redux-store";
import { Dispatch } from 'redux';
import * as stream from "stream";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const SET_AUTH_ERROR = 'authReducer/SET_AUTH_ERROR';
const SET_CAPCHA_URL = 'authReducer/SET_CAPCHA_URL';

let initialState = {
    id: -564,
    email: '',
    login: '',
    isAuth: false,
    authError: null,
    captchaURL: "",
}

export type authReducerPropsType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
    authError: string | null,
    captchaURL: string,
}

type ActionAuthReducerTypes = setAuthUserDataACType | setAuthErrorType | SetCaphchaURLType;

export const authReducer = (state: authReducerPropsType = initialState, action: ActionAuthReducerTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                //...action.data,
                id: action.data.id,
                email: action.data.email,
                login: action.data.login,
                isAuth: action.data.isAuth,
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.authError,
            }
        case SET_CAPCHA_URL:
            //debugger
            return {
                ...state,
                captchaURL: action.captchaURL,
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

type SetCaphchaURLType = { type: typeof SET_CAPCHA_URL, captchaURL: string}
export const SetCaphchaURL = (capchaServerURL: string):SetCaphchaURLType => ({ type: SET_CAPCHA_URL, captchaURL: capchaServerURL})

export const getAuthUserDataThunkCreator = () => async (dispatch: Dispatch) => {
    let response = await authAPI.authMe();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserDataAC(id, email, login, true));
    }
}


export const onLoginRequest = (values:ValuesType) => async (dispatch:dispatchType) => {
    let response = await authAPI.login(values)
    if (response.resultCode === 0) {
        //Далее идет Дублирование кода thunk getAuthUserDataThunkCreator, т.к. не могу из одной санки вызвать другую
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserDataAC(id, email, login, true));
            }
        });
    } else if (response.resultCode === 10) {
        //dispatch(getCapchaURL());
        let response = await Security.getCapcha();
        let message = 'Captcha is needed!';
        if (response.url) {
            dispatch(SetCaphchaURL(response.url));
            if (response.messages) message = response.messages[0].length>0 ? response.messages[0] : 'Bad captcha'
        }
        dispatch(setAuthError(message));
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

export const getCapchaURL = () => async (dispatch:dispatchType) => {
    debugger
    let response = await Security.getCapcha();
    debugger
    if (response.url) {
        dispatch(SetCaphchaURL(response.url));
    }
}
