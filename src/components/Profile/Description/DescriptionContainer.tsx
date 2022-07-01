import React from "react";
import {state_ProfilePage_profileDescription_PropsType, statePropsType} from "../../../redux/state";
import {Description} from "./Description";
import {connect} from "react-redux";
/*import {StoreContext} from "../../../StoreContext";*/

/*
type DescriptionPropsType = {
    profileDescription: state_ProfilePage_profileDescription_PropsType
}
*/


let mapStateToProps = (state: statePropsType) => {
    return {
        profile: state.profilePage.profile,
        /*profileDescription: state.profilePage.profileDescription*/
    }
}
/*let mapDispatchToProps = () => {
    return {

    }
}*/
export const DescriptionContainer = connect(mapStateToProps)(Description);
