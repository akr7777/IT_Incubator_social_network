import React from "react";
import {state_ProfilePage_profileDescription_PropsType, statePropsType} from "../../../redux/state";
import {Description} from "./Description";
import {connect} from "react-redux";

let mapStateToProps = (state: statePropsType) => {
    return {
        profile: state.profilePage.profile,
    }
}
export const DescriptionContainer = connect(mapStateToProps)(Description);
