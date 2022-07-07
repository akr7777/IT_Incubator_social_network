import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {friendsSidebarReducer} from "./friendsSidebar-reducer";
import {messagesReducer} from "./messages-reducer";
import {userReducer} from "./users-reducer";
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsSidebar: friendsSidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof reducers>

/*window.store = store;*/

export default store;