import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {Description} from "./Description/Description";
import {
    actionPropsType,
    state_ProfilePage_profileDescription_PropsType,
    state_profilePage_profilePosts_PropsType,
    storePropsType,
    statePropsType,
} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {DescriptionContainer} from "./Description/DescriptionContainer";

import Profile from './Profile';
import {Component} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from './../../redux/profile-reducer';

/*type ProfilePropsType = {
    profileDescription: state_ProfilePage_profileDescription_PropsType,//name: string,birthday: string, phone: string, email: string
    profilePosts: Array<state_profilePage_profilePosts_PropsType>,
    updatedPostText_inTextArea: string,
    dispatch: (action: actionPropsType) => number
}
type ProfilePropsType1 = {
    store: storePropsType
}*/
type ProfileContainerPropsType = {
    setUserProfile: (data: any) => void,
}
class ProfileContainer extends Component</*ProfileContainerPropsType*/any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
            /*this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);*/

            //this.props.setCurrentPage(23);
        });
    }
    render () {
        return (
            <Profile /*{...this.props}*/ profile={this.props.profile}/>
            /*<div className={s1.profile}>
                <DescriptionContainer/>
                <MyPostsContainer/>
            </div>*/
        );
    }
}

let mapStateToProps = (state: statePropsType) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);