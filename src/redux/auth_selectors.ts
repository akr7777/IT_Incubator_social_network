import {createSelector} from 'reselect';
import { AppStateType } from './redux-store';

export const getIsAuth = (state:AppStateType) => {
    return state.auth.isAuth;
}

export const getAuthError = (state:AppStateType) => {
    return state.auth.authError;
}

export const getId = (state:AppStateType) => {
    return state.auth.id;
}

export const getEmail = (state:AppStateType) => {
    return state.auth.email;
}

export const getLogin = (state:AppStateType) => {
    return state.auth.login;
}

export const getCaptchaURL = (state:AppStateType) => {
    return state.auth.captchaURL;
}