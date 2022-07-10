
import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import { ProfileContainerPropsType } from '../Profile/ProfileContainer';


let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login" replace={true} />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent
}

