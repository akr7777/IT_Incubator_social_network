import React, {Component} from "react";
import {connect} from "react-redux";
import {/*statePropsType*/ userType} from "../../redux/state";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, toggleIsFetching,
    toggleFollowingProgress, getUsers, UsersInitialStateType} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import {AppStateType} from "./../../redux/redux-store";
import {AnyAction, Dispatch} from 'redux';
import Preloader from './../common/Preloader';
import {userAPI} from './../../api/api';
import { Navigate } from "react-router-dom";

type toggleFollowingProgressPropsType = {
    type: string,
    isFetching: boolean,
    userID: number,
}
export type mapDispatchToPropsType = {
    setUsers: (users: userType[]) => void,
    follow: (userid: number) => void,
    unfollow: (userid: number) => void,
    setCurrentPage: (p: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isfetching: boolean) => void,
    toggleFollowingProgress: (isfetching: boolean, userID: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
    isAuth: boolean,
}
type UsersContainerPropsType = UsersInitialStateType & mapDispatchToPropsType


class UsersAPIComponent extends Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        if (!this.props.isAuth) return <Navigate to="/login" replace={true} />

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
                isFetching={this.props.isFetching}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType):UsersInitialStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
}

export const UsersContainer = connect(mapStateToProps,
        {follow, unfollow, setCurrentPage,
        setUsers, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress,
            getUsers})(UsersAPIComponent);
