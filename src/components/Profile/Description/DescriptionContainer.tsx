import React from "react";
import {Description} from "./Description";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { profileReducerType } from "../../../redux/profile-reducer";

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}
export const DescriptionContainer = connect(mapStateToProps)(Description);
