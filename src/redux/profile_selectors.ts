import {createSelector} from 'reselect';
import { AppStateType } from './redux-store';

export const getProfilePageSelector = (state: AppStateType) => {
    return state.profilePage;
}

export const getStatusSelector = (state: AppStateType) => {
    return state.profilePage.status;
}

export const getIsAuthSelector = (state: AppStateType) => {
    return state.auth.isAuth;
}

export const getAutorizedIDSelector = (state: AppStateType) => {
    return state.auth.id;
}