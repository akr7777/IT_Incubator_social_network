import React from "react";
import {state_ProfilePage_profileDescription_PropsType, statePropsType} from "../../../redux/state";
import {Description} from "./Description";
import {connect} from "react-redux";
/*import {StoreContext} from "../../../StoreContext";*/

type DescriptionPropsType = {
    profileDescription: state_ProfilePage_profileDescription_PropsType
}
/*export const DescriptionContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return <Description profileDescription={store.getState().profilePage.profileDescription} />
                }
            }

        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state: statePropsType) => {
    return {
        profileDescription: state.profilePage.profileDescription
    }
}
let mapDispatchToProps = () => {
    return {

    }
}
export const DescriptionContainer = connect(mapStateToProps)(Description);
