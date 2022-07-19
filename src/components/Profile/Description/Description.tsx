import React, {ChangeEventHandler} from "react";
import ccs_classes from "./Description.module.css";
//import {actionPropsType} from "../../../redux/state";
import myava from './../../../assets/images/myava.jpeg';
import abstractAva from './../../../assets/images/abst_user_ava.png';
import Preloader from "../../common/Preloader";
import {Navigate, NavLink} from "react-router-dom";
import {profileReducer, ProfileReducerType, ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {DescriptionPropsType} from "./DescriptionContainer";
import s from './Description.module.css';

/*type DescriptionPropsType5 = {
    /!*profileDescription: state_ProfilePage_profileDescription_PropsType*!/
    profile: profileType,
    status: string,
    //updateStatus: (status: string) => void,
    //dispatch: (action: actionPropsType) => void,
    //setUserProfile: (data: ProfilePropsType1) => void,

}*/

export const Description = (props: DescriptionPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.saveMainPhoto(e.target.files[0]);
        }
    }

    return (
        <div className={ccs_classes.description}>
            <div>
                <img className={ccs_classes.ava} src={props.profile.photos.large || abstractAva}/>
            </div>
            <div>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            </div>
            <div>Имя: {props.profile.fullName}</div>
            <div>Status:<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/></div>
            <div>Full name: {props.profile.fullName}</div>

            {/*<ProfileData profile={props.profile}/>*/}
            <div className={s.profile_data}>
                <div className={s.additional_info_div}>
                    {props.profile.aboutMe && <div>ABout me: {props.profile.aboutMe}</div>}
                    <div>lookingForAJob: <b>{props.profile.lookingForAJob ? "yes" : "no" }</b></div>
                    {props.profile.lookingForAJob && <div>My professional skills: <b>{props.profile.lookingForAJobDescription}</b></div>}
                </div>
                <div className={s.contacts_div}>
                    <h4>contacts:</h4>
                    {/*{Object.keys(props.profile.contacts).map(cont => {
                            return props.profile.contacts[cont] && <div>website: <b>{props.profile.contacts[cont]}</b></div>
                        }
                    )}*/}

                    {props.profile.contacts.facebook &&  <div>facebook:  {props.profile.contacts.facebook}</div>}
                    {props.profile.contacts.website &&  <div>website:  {props.profile.contacts.website}</div>}
                    {props.profile.contacts.vk && <div>vk:   {props.profile.contacts.vk}</div>}
                    {props.profile.contacts.twitter && <div>twitter:   {props.profile.contacts.twitter}</div>}
                    {props.profile.contacts.instagram && <div>instagram:   {props.profile.contacts.instagram}</div>}
                    {props.profile.contacts.youtube && <div>youtube:  {props.profile.contacts.youtube}</div> }
                    {props.profile.contacts.github && <div>github:  {props.profile.contacts.github}</div>}
                    {props.profile.contacts.mainLink && <div>mainLink:  {props.profile.contacts.mainLink}</div>}
                </div>
            </div>

        </div>
    );
}

const ProfileData = (props: ProfileType) => {
    return (
        <div className={s.profile_data}>
            <div className={s.additional_info_div}>
                {props.aboutMe && <div>ABout me: {props.aboutMe}</div>}
                <div>lookingForAJob: <b>{props.lookingForAJob ? "yes" : "no" }</b></div>
                {props.lookingForAJob && <div>My professional skills: <b>{props.lookingForAJobDescription}</b></div>}
            </div>
            <div className={s.contacts_div}>
                <h4>contacts:</h4>
                {/*{Object.keys(props.profile.contacts).map(cont => {
                            return props.profile.contacts[cont] && <div>website: <b>{props.profile.contacts[cont]}</b></div>
                        }
                    )}*/}

                {props.contacts.facebook &&  <div>facebook:  {props.contacts.facebook}</div>}
                {props.contacts.website &&  <div>website:  {props.contacts.website}</div>}
                {props.contacts.vk && <div>vk:   {props.contacts.vk}</div>}
                {props.contacts.twitter && <div>twitter:   {props.contacts.twitter}</div>}
                {props.contacts.instagram && <div>instagram:   {props.contacts.instagram}</div>}
                {props.contacts.youtube && <div>youtube:  {props.contacts.youtube}</div> }
                {props.contacts.github && <div>github:  {props.contacts.github}</div>}
                {props.contacts.mainLink && <div>mainLink:  {props.contacts.mainLink}</div>}
            </div>
        </div>
    );
}
/*
export default Description;
*/
