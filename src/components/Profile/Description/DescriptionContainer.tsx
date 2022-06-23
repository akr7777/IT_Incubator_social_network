import React from "react";
import {state_ProfilePage_profileDescription_PropsType} from "../../../redux/state";
import {Description} from "./Description";
import {StoreContext} from "../../../StoreContext";

type DescriptionPropsType = {
    profileDescription: state_ProfilePage_profileDescription_PropsType
}
export const DescriptionContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return <Description profileDescription={store.getState().profilePage.profileDescription} />
                }
            }
            
        </StoreContext.Consumer>
    );
}
