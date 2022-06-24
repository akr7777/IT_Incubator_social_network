import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {friendsSidebarReducer} from "./friendsSidebar-reducer";
import {messagesReducer} from "./messages-reducer";
import {userReducer} from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsSidebar: friendsSidebarReducer,
    usersPage: userReducer,
});

let store = createStore(reducers);

/*window.store = store;*/

export default store;