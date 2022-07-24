import React from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import {authAPI} from '../../api/api';
import {getCapchaURL, logoutProcedure, onLoginRequest} from '../../redux/auth-reducer';
import {getAuthError, getCaptchaURL, getEmail, getId, getIsAuth, getLogin } from '../../redux/auth_selectors';
import {AppStateType, dispatchType} from '../../redux/redux-store';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Login, {ValuesType} from './Login';

export type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType;

class LoginContainer extends React.Component<LoginPropsType> {
    render() {
        return <Login
            isAuth={this.props.isAuth}
            authError={this.props.authError}
            captchaURL={this.props.captchaURL}
            onLoginRequest={this.props.onLoginRequest}
            logoutProcedure={this.props.logoutProcedure}
        />
    }
}

type mapStateToPropsType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
    authError: string | null,
    captchaURL: string,
}
let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: getIsAuth(state),
        authError: getAuthError(state),

        id: getId(state),
        email: getEmail(state),
        login: getLogin(state),

        captchaURL: getCaptchaURL(state),
    }
}

type mapDispatchToPropsType = {
    onLoginRequest: (values: ValuesType) => void,
    logoutProcedure: () => void,
    getCapchaURL: () => void,
}

/*
export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>
        (mapStateToProps, {onLoginRequest, logoutProcedure, getCapchaURL})
)(LoginContainer)
*/

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {onLoginRequest, logoutProcedure, getCapchaURL})(LoginContainer);
