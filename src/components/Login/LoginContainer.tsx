import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import {logoutProcedure, onLoginRequest } from '../../redux/auth-reducer';
import { AppStateType, dispatchType } from '../../redux/redux-store';
import Login, { ValuesType } from './Login';


/*const onSubmitLoginForm = (values:ValuesType) => {
        authAPI.login(values).then(response => {
            window.alert(JSON.stringify(response))
        });
    }*/
export type LoginPropsType = mapStateToPropsType &  mapDispatchToPropsType;

type mapStateToPropsType = {
    isAuth: boolean,
    authError: boolean
}
let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        authError: state.auth.authError,
    }
}

type mapDispatchToPropsType = {
    onLoginRequest: (values:ValuesType) => void,
    //onLoginRequest: (values:ValuesType) => number,
    logoutProcedure: () => void,
}
/*let mapDispatchToProps = (/!*state: AppStateType*!/dispatch: dispatchType) => {
    return {
        onSubmitLoginForm: onLoginRequest,
        onLogoutHandler: logoutProcedure,
    }
}*/

export const LoginContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {onLoginRequest, logoutProcedure})(Login);