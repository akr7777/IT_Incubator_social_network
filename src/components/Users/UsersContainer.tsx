import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {statePropsType, usersType} from "../../redux/state";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state: /*statePropsType*/any) => {
    return {
        users: state.usersPage.users
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
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);