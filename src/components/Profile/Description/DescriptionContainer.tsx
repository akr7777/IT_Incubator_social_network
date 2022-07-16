import React from "react";
import {Description} from "./Description";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { profileReducerType, profileType, updateStatus } from "../../../redux/profile-reducer";

type MapStateToPropsType = {
    profile: profileType,
    status: string,
}
type MapDispatchToPropsType = {
    updateStatus: (status: string) => void,
}
export type DescriptionPropsType = MapStateToPropsType & MapDispatchToPropsType;
let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        //updateStatus: //(status: string) => void,
    }
}
export const DescriptionContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {updateStatus})(Description);
