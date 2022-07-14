import React, {Component} from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, toggleIsFetching,
    toggleFollowingProgress, getUsers, UsersInitialStateType, userType} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import {AppStateType} from "./../../redux/redux-store";
import {AnyAction, Dispatch} from 'redux';
import Preloader from './../common/Preloader';
import {userAPI} from './../../api/api';
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import {getFollowingInProgres, getIsFetching, requestCurrentPage, requestPageSize, requestTotalUsersCount, /*requestUsers,*/ requestUsersSuperSelector } from "../../redux/users-selectors";

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
        users: requestUsersSuperSelector(state),
        pageSize: requestPageSize(state),
        totalUsersCount: requestTotalUsersCount(state),
        currentPage: requestCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgres(state),
    }
}
/*const mapStateToProps = (state: AppStateType):UsersInitialStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}*/

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage,
            setUsers, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress,
            getUsers}),
    withAuthRedirect
)(UsersAPIComponent)