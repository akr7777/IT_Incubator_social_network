import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {friendsSidebarReducer} from "./friendsSidebar-reducer";
import {messagesReducer} from "./messages-reducer";
import {userReducer} from "./users-reducer";
import {authReducer} from './auth-reducer';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import appReducer from "./app-reducer";
import { useDispatch } from "react-redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsSidebar: friendsSidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type storeType = typeof reducers;
export type AppStateType = ReturnType<storeType>;
export type dispatchType = typeof store.dispatch;
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, storeType,unknown, AnyAction>
/*
type ThunkDispatchType = ThunkDispatch<AppStateType, void,AnyAction>;
export const useAppDispatch = () => useDispatch<ThunkDispatchType>()
*/

let st: AppStateType;

declare const window: Window &
    typeof globalThis & {
    store: any
}
window.store = store;

export default store;