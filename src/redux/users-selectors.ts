import { AppStateType } from "./redux-store";
import { userType } from "./users-reducer";


export const requestUsers = (state: AppStateType):Array<userType> => {
    return state.usersPage.users;
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