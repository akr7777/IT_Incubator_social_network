import { AppStateType } from "./redux-store";
import { userType } from "./users-reducer";
import {createSelector} from 'reselect';

export const requestUsers = (state: AppStateType):Array<userType> => {
    return state.usersPage.users;
}
export const requestUsersSelector = (state: AppStateType):Array<userType> => {
    return requestUsers(state).filter( u => true);
}



export const requestPageSize = (state: AppStateType):number => {
    return  state.usersPage.pageSize;
}

export const requestTotalUsersCount = (state: AppStateType):number => {
    return state.usersPage.totalUsersCount;
}

export const requestCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgres = (state: AppStateType): Array<number> => {
    return state.usersPage.followingInProgress;
}


export const requestUsersSuperSelector = createSelector(requestUsers, requestPageSize,
    (users, isFetching) => {
        return users.filter( u => true);
    });