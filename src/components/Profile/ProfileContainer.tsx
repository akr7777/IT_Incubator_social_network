import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {Description} from "./Description/Description";
import {
    actionPropsType,
    state_profilePage_profilePosts_PropsType,
} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {DescriptionContainer} from "./Description/DescriptionContainer";

import Profile from './Profile';
import {Component} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {profileReducerType, profileType, getUserProfile /*setUserProfile*/} from './../../redux/profile-reducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
import { userAPI } from "../../api/api";

type ProfilePropsType = {
    profile: profileType,
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number
}

type ProfileContainerPropsType = {
    profilePage: profileReducerType
    //setUserProfile: (data: any) => void,
    //getUserProfile: (userID: number) => void,
}
class ProfileContainer extends Component</*ProfileContainerPropsType*/any> {
    componentDidMount() {
        let profileId = this.props.router.params.id ? this.props.router.params.id : 2;
        this.props.getUserProfile(profileId);
        /*userAPI.getProfile(profileId).then(response => {
            this.props.setUserProfile(response.data);
        });*/

    }
    render () {
        return (
            <Profile />
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profilePage: state.profilePage
});

function withRouter(Component: any) {
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

export default connect(mapStateToProps, {getUserProfile}/*, {setUserProfile}*/)(withRouter(ProfileContainer));