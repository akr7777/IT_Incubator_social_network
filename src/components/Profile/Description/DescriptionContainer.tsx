import React from "react";
import {Description} from "./Description";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { ProfileReducerType, ProfileType, saveMainPhoto, updateStatus } from "../../../redux/profile-reducer";
import { ProfilePropsType } from "../Profile";

type MapStateToPropsType = {
    profile: ProfileType,
    status: string,
    autorizedUserID: number,
    isOwner: boolean,
}
type MapDispatchToPropsType = {
    updateStatus: (status: string) => void,
    saveMainPhoto: (photoFile: any) => void
}

export type DescriptionPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType) => {
    return {
        /*profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserID: state.auth.id,
        isOwner: ownProps.isOwner,*/
        //updateStatus: //(status: string) => void,
    }
}

//type MergePropsType = MapStateToPropsType & MapDispatchToPropsType &
/*const mergeProps = (mapStateToProps:MapStateToPropsType, {updateStatus}:MapDispatchToPropsType, ownProps:ProfilePropsType) => {
    return Object.assign({}, ownProps, mapStateToProps, {updateStatus})
}*/

export const DescriptionContainer = connect<null, MapDispatchToPropsType, {}, AppStateType>
                                            (null, {updateStatus, saveMainPhoto})(Description);
