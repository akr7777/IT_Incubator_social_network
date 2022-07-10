import React from "react";
import {Description} from "./Description";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { profileReducerType } from "../../../redux/profile-reducer";

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        //updateStatus: //(status: string) => void,
    }
}
export const DescriptionContainer = connect(mapStateToProps)(Description);
