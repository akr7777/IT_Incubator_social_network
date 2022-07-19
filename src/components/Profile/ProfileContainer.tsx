import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {Description} from "./Description/Description";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {DescriptionContainer} from "./Description/DescriptionContainer";
import Profile from './Profile';
import {Component} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {ProfileReducerType, ProfileType, getUserProfile, getStatus, updateStatus, saveMainPhoto} from './../../redux/profile-reducer';
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
//import { userAPI } from "../../api/api";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

/*type ProfilePropsType = {
    profile: profileType,
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number
}*/

/*export type ProfileContainerPropsType = {
    profilePage: profileReducerType,
    isAuth: boolean,
    getUserProfile: (userID: number) => void,
    router: any,
    autorizedUserID: number,

    getStatus: (userID: number) => void,
    updateStatus: (status: string) => void,
}*/
type MapStateToPropsType = {
    profilePage: ProfileReducerType,
    status: string,
    isAuth: boolean,
    autorizedUserID: number,
}
type MapDispatchToPropsType = {
    getUserProfile: (userID: number) => void,
    getStatus: (userID: number) => void,
    updateStatus: (status: string) => void,
    saveMainPhoto: (photoFile: any) => void,
}
type OwnPropsType = {
    router: any,
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

class ProfileContainer extends Component<ProfileContainerPropsType> {
    refreshProfile () {
        let userID = this.props.router.params.id ? this.props.router.params.id : this.props.autorizedUserID;
        this.props.getUserProfile(userID);
        this.props.getStatus(userID);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps:ProfileContainerPropsType, prevState:any, snapshot:any) {
        if (this.props.profilePage.profile.userId != prevProps.profilePage.profile.userId) {
            this.refreshProfile();
        }
    }
    render () {
        return ( <Profile
            isOwner={!this.props.router.params.id}
            profilePage={this.props.profilePage}
            status={this.props.status}
            autorizedUserID={this.props.autorizedUserID}
            updateStatus={this.props.updateStatus}
            saveMainPhoto={this.props.saveMainPhoto}
        /> );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profilePage: state.profilePage,
    status: state.profilePage.status,

    isAuth: state.auth.isAuth,
    autorizedUserID: state.auth.id,
});

function withRouter(Component: React.ComponentType) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}


//export default connect(mapStateToProps, {getUserProfile})(withRouter(withAuthRedirect(ProfileContainer)))
export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {getUserProfile, getStatus, updateStatus, saveMainPhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
