import React from "react";
import store from "./redux/redux-store"
import {storePropsType} from "./redux/state";

export const StoreContext = React.createContext(store);