import React from "react";
import {AnyAction} from "redux";
import { authAPI } from "../api/api";
import { ValuesType } from "../components/Login/Login";
import { getAuthUserDataThunkCreator } from "./auth-reducer";
import { dispatchType } from "./redux-store";
//import {actionPropsType} from "./state"

const INICIALIZED_SUCCESS = 'INICIALIZED_SUCCESS';

let appInicialState = {
    inicialized: false,
}

export type appReducerPropsType1 = {
    inicialized: boolean
}

export const appReducer = (state: appReducerPropsType1 = appInicialState, action: AnyAction) => {
    switch (action.type) {
        case INICIALIZED_SUCCESS:
            return {
                ...state,
                inicialized: true
            }
        default: {
            return state;
        }
    }
}

export const setInicializedSuccess = () => ( { type: INICIALIZED_SUCCESS });

export const inicializeApp = () => (dispatch: dispatchType) => {
    let promise = new Promise((resolve, reject) => {
        resolve(getAuthUserDataThunkCreator());
    });

    promise.then( () => {
        dispatch(setInicializedSuccess());
    } )
}

export default appReducer;