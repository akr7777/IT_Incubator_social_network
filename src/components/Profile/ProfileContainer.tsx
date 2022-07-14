import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {Description} from "./Description/Description";
/*import {
    actionPropsType,
    state_profilePage_profilePosts_PropsType,
} from "../../redux/state";*/
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {DescriptionContainer} from "./Description/DescriptionContainer";

import Profile from './Profile';
import {Component} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {profileReducerType, profileType, getUserProfile, getStatus, updateStatus} from './../../redux/profile-reducer';
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

export type ProfileContainerPropsType = {
    profilePage: profileReducerType,
    isAuth: boolean,
    getUserProfile: (userID: number) => void,
    router: any,
    autorizedUserID: number,

    getStatus: (userID: number) => void,
    updateStatus: (status: string) => void,
}

class ProfileContainer extends Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userID = this.props.router.params.id ? this.props.router.params.id : this.props.autorizedUserID;
        this.props.getUserProfile(userID);
        this.props.getStatus(userID);
    }

    render () {
        return ( <Profile updateStatus={this.props.updateStatus}/> );
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
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
