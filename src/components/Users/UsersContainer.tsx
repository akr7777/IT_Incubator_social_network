import React, {Component} from "react";
import {connect} from "react-redux";
import {statePropsType, usersType} from "../../redux/state";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, toggleIsFetching, toggleFollowingProgress} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import {AppStateType} from "./../../redux/redux-store";
import {Dispatch} from 'redux';
import Preloader from './../common/Preloader';
import {userAPI} from './../../api/api';

class UsersAPIComponent extends Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

type MapStatePropsType = {
    users: usersType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    //followingInProgress: boolean,
    followingInProgress: Array<number>,
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

type toggleFollowingProgressPropsType = {
    type: string,
    isFetching: boolean,
    userID: number,
}
export type mapDispatchToPropsType = {
    setUsers: (users: usersType) => void,
    follow: (userid: number) => void,
    unfollow: (userid: number) => void,
    setCurrentPage: (p: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isfetching: boolean) => void,
    toggleFollowingProgress: (isfetching: boolean, userID: number) => toggleFollowingProgressPropsType,
}

type UsersContainerPropsType = MapStatePropsType & mapDispatchToPropsType;

export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersAPIComponent);
