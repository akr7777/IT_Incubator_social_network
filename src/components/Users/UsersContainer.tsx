import React, {Component} from "react";
//import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from "react-redux";
import {statePropsType, usersType} from "../../redux/state";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, toggleIsFetchingAC} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import {AppStateType} from "./../../redux/redux-store";
import {Dispatch} from 'redux';
import Preloader from './../common/Preloader';

class UsersAPIComponent extends Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);

            //this.props.setCurrentPage(23);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
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

                /*setCurrentPage={this.props.setCurrentPage}
                setUsers={this.props.setUsers}*/

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
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export type mapDispatchToPropsType = {
    setUsers: (users: usersType) => void,
    follow: (userid: number) => void,
    unfollow: (userid: number) => void,
    setCurrentPage: (p: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isfetching: boolean) => void,
}

type UsersContainerPropsType = MapStatePropsType & mapDispatchToPropsType;

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userid: number) => {
            dispatch(followAC(userid));
        },
        unfollow: (userid: number) => {
            dispatch(unfollowAC(userid));
        },
        setUsers: (users: usersType) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (p: number) => {
            dispatch(setCurrentPageAC(p));
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);