import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {statePropsType, usersType} from "../../redux/state";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state: /*statePropsType*/any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: any) => {
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
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);