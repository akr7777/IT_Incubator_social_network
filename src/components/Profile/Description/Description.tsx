import React from "react";
import ccs_classes from "./Description.module.css";
import {actionPropsType, state_ProfilePage_profileDescription_PropsType} from "../../../redux/state";
import myava from './../../../assets/images/myava.jpeg';
import { ProfilePropsType0 } from "../Profile";
import Preloader from "../../common/Preloader";
import {Navigate, NavLink } from "react-router-dom";
/*
export type DescriptionPropsType = {
    name: string,
    birthday: string,
    phone: string,
    email: string
}
*/
type DescriptionPropsType5 = {
    /*profileDescription: state_ProfilePage_profileDescription_PropsType*/
    profile: ProfilePropsType0,
    dispatch: (action: actionPropsType) => void,
    //setUserProfile: (data: ProfilePropsType1) => void,

}
export const Description = (props: any) => {
    if (!props.profile) {
        return <Preloader />
    }

    debugger;

    return (
        <div className={ccs_classes.description}>
            <div>
                <img className={ccs_classes.ava} src={props.profile.photos.large}/>
            </div>
            <div>
                <div>Имя: {props.profile.fullName}</div>
                <div>Status: {props.profile.aboutMe}</div>
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
