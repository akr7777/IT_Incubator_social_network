import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAuthUserDataThunkCreator } from '../../redux/auth-reducer';
import {getUserProfile, onProfileSettingsSubmit, ProfileReducerType, ProfileType } from '../../redux/profile-reducer';
import { AppStateType, dispatchType } from '../../redux/redux-store';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Settings, { ProfileSettingsValuesType } from './Settings';

export type SettingsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

class SettingsContainer extends Component<SettingsContainerPropsType> {
    componentDidMount() {
        this.props.getUserProfile(this.props.authUserID);
        //console.log('SettingsContainer componentDidMount this.props.profile=',this.props.profile)
    }

    componentDidUpdate(prevProps:SettingsContainerPropsType, prevState:any, snapshot:any) {
        if (this.props.authUserID !== prevProps.authUserID) {
            this.props.getUserProfile(this.props.authUserID);
        }

    }

    render() {
        return <Settings
            profile={this.props.profile}
            onProfileSettingsSubmit={this.props.onProfileSettingsSubmit}
        />
    }
}

type MapStateToPropsType = {
    profile: ProfileType,
    authUserID: number,
}
let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    authUserID: state.auth.id,
});
type MapDispatchToPropsType = {
    onProfileSettingsSubmit: (values: ProfileSettingsValuesType) => void,
    getUserProfile: (userID:number)=> void,
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
            (mapStateToProps, {onProfileSettingsSubmit, getUserProfile}),
    withAuthRedirect
    )(SettingsContainer)