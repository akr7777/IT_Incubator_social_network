import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import { AppStateType } from '../../redux/redux-store';
import Login, { ValuesType } from './Login';


const onSubmitLoginForm = (values:ValuesType) => {
        authAPI.login(values).then(response => {
            window.alert(JSON.stringify(response))
        });
    }

/*let mapStateToProps = (state: AppStateType) => {
    return {
    }
}*/

let mapDispatchToProps = (state: AppStateType) => {
    return {
        onSubmitLoginForm: onSubmitLoginForm
    }
}

export const LoginContainer = connect(mapDispatchToProps)(Login);