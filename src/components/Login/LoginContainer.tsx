import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import {logoutProcedure, onLoginRequest } from '../../redux/auth-reducer';
import { AppStateType, dispatchType } from '../../redux/redux-store';
import Login, { ValuesType } from './Login';

export type LoginPropsType = mapStateToPropsType &  mapDispatchToPropsType;

type mapStateToPropsType = {
    isAuth: boolean,
    authError: string | null
}
let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        authError: state.auth.authError,
    }
}

type mapDispatchToPropsType = {
    onLoginRequest: (values:ValuesType) => void,
    logoutProcedure: () => void,
}


export const LoginContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {onLoginRequest, logoutProcedure})(Login);