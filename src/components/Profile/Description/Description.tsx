import React from "react";
import ccs_classes from "./Description.module.css";
import {actionPropsType} from "../../../redux/state";
import myava from './../../../assets/images/myava.jpeg';
//import { ProfilePropsType0 } from "../Profile";
import Preloader from "../../common/Preloader";
import {Navigate, NavLink } from "react-router-dom";
import {profileReducer, profileReducerType, profileType } from "../../../redux/profile-reducer";

type DescriptionPropsType5 = {
    /*profileDescription: state_ProfilePage_profileDescription_PropsType*/
    profile: profileType,
    //dispatch: (action: actionPropsType) => void,
    //setUserProfile: (data: ProfilePropsType1) => void,

}
export const Description = (props: DescriptionPropsType5) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={ccs_classes.description}>
            <div>
                <img className={ccs_classes.ava} src={props.profile.photos.large}/>
            </div>
            <div>
                <div>Имя: {props.profile.fullName}</div>
                <div>Status: {props.profile.lookingForAJob}</div>
                <div>
                    <NavLink to={'/profile/5'} reloadDocument>user 5</NavLink>
                </div>
            </div>
            {/*<div>Name: {props.profileDescription.name}</div>
            <div>Birthdate: {props.profileDescription.birthday}</div>
            <div>Phone: {props.profileDescription.phone}</div>
            <div>email: {props.profileDescription.email}</div>*/}
        </div>
    );
}

/*
export default Description;
*/
