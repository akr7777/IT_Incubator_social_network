import React from 'react';
import {ProfileType} from '../../redux/profile-reducer';
import {SettingsContainerPropsType} from './SettingsContainer';
import s from './Settings.module.css';
import {Form, Field} from 'react-final-form'
import {render} from 'react-dom'
import {FORM_ERROR} from 'final-form';
import { useDispatch } from 'react-redux';
//import { useAppDispatch } from '../../redux/redux-store';

export type ProfileSettingsValuesType = {
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    }
}
type SettingsPropsType = {
    profile: ProfileType,
    onProfileSettingsSubmit: (values: ProfileSettingsValuesType) => void,
}
type ProfileSettingsFormpropsType = {
    profile: ProfileType,
    onSubmit: (values: ProfileSettingsValuesType) => void,
}

const Settings = (props: SettingsPropsType) => {

    const onFormSubmit = (values: any) => {

        /*const values1:ProfileSettingsValuesType = {
            aboutMe: values.aboutMe ? values.aboutMe : "",
            lookingForAJob: values.lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription ? values.lookingForAJobDescription : 0,
            fullName: values.fullName ? values.fullName : "",
            contacts: {
                facebook: values.facebook ? values.facebook : "",
                website: values.website ? values.website : "",
                vk: values.vk ? values.vk : "",
                twitter: values.twitter ? values.twitter : "",
                instagram: values.instagram ? values.instagram : "",
                youtube: values.youtube ? values.youtube : "",
                github: values.github ? values.github : "",
                mainLink: values.mainLink ? values.mainLink : "",
            }
        }*/

        props.onProfileSettingsSubmit(values);
    }

    //console.log('profile.contacts.facebook=', props.profile.contacts.facebook);

    return <div className={s.main_wrapped_div}>
        <h2>This is settings!</h2>
        <div className={s.profile_info_block}>
            <h3>Profile info:</h3>
            <ProfileSettingsForm profile={props.profile} onSubmit={onFormSubmit}/>
        </div>
    </div>;
}


const ProfileSettingsForm = ({profile, onSubmit}: ProfileSettingsFormpropsType) => (
    <Form
        initialValues={{
            fullName: profile.fullName || "full name",
            aboutMe: profile.aboutMe || "about me",
            lookingForAJob: profile.lookingForAJob || false,
            lookingForAJobDescription: profile.lookingForAJobDescription || "lookingForAJobDescription",

            facebook: profile.contacts.facebook ?  profile.contacts.facebook : "facebook",
            website: profile.contacts.website || "website",
            vk: profile.contacts.vk || "vk",
            twitter: profile.contacts.twitter || "twitter",
            instagram: profile.contacts.instagram || "instagram",
            youtube: profile.contacts.youtube || "youtube",
            github: profile.contacts.github || "github",
            mainLink: profile.contacts.mainLink || "mainLink"
        }}

        onSubmit={values => onSubmit(values as ProfileSettingsValuesType)}
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <Field
                        name="fullName"
                        component="input"
                        type="text"
                        placeholder="Full Name"
                    />
                </div>

                <div>
                    <label>About me:</label>
                    <Field
                        name="aboutMe"
                        component="input"
                        type="text"
                        placeholder="Tell us about you"
                    />
                </div>

                <div>
                    <label>looking For A Job:</label>
                    <Field name="lookingForAJob" component="input" type="checkbox"/>
                </div>

                <div>
                    <label>Professional Skills:</label>
                    <Field
                        name="lookingForAJobDescription"
                        component="input"
                        type="text"
                        placeholder="Ddescribe your Professional Skills"
                    />
                </div>

                {/*<h4>Contacts:</h4>
                <div>
                    <label>facebook:</label>
                    <Field
                        name="facebook"
                        component="input"
                        type="text"
                    />
                </div>
                <div>
                    <label>website:</label>
                    <Field
                        name="website"
                        component="input"
                        type="text"
                    />
                </div>
                <div>
                    <label>vk:</label>
                    <Field
                        name="vk"
                        component="input"
                        type="text"
                    />
                </div>
                <div>
                    <label>twitter:</label>
                    <Field
                        name="twitter"
                        component="input"
                        type="text"
                    />
                </div>
                <div>
                    <label>instagram:</label>
                    <Field
                        name="instagram"
                        component="input"
                        type="text"
                    />
                </div>
                <div>
                    <label>youtube:</label>
                    <Field
                        name="youtube"
                        component="input"
                        type="text"
                    />
                </div>
                <div>
                    <label>github:</label>
                    <Field
                        name="github"
                        component="input"
                        type="text"
                    />
                </div>
                <div>
                    <label>mainLink:</label>
                    <Field
                        name="mainLink"
                        component="input"
                        type="text"
                    />
                </div>*/}

                //-----------------

                {/* <div>
                    <label>Favorite Color</label>
                    <Field name="favoriteColor" component="select">
                        <option />
                        <option value="#ff0000">❤️ Red</option>
                        <option value="#00ff00">💚 Green</option>
                        <option value="#0000ff">💙 Blue</option>
                    </Field>
                </div>*/}

                {/*<div>
                    <label>Toppings</label>
                    <Field name="toppings" component="select" multiple>
                        <option value="chicken">🐓 Chicken</option>
                        <option value="ham">🐷 Ham</option>
                        <option value="mushrooms">🍄 Mushrooms</option>
                        <option value="cheese">🧀 Cheese</option>
                        <option value="tuna">🐟 Tuna</option>
                        <option value="pineapple">🍍 Pineapple</option>
                    </Field>
                </div>*/}

                {/*<div>
                    <label>Sauces</label>
                    <div>
                        <label>
                            <Field
                                name="sauces"
                                component="input"
                                type="checkbox"
                                value="ketchup"
                            />{' '}
                            Ketchup
                        </label>
                        <label>
                            <Field
                                name="sauces"
                                component="input"
                                type="checkbox"
                                value="mustard"
                            />{' '}
                            Mustard
                        </label>
                        <label>
                            <Field
                                name="sauces"
                                component="input"
                                type="checkbox"
                                value="mayonnaise"
                            />{' '}
                            Mayonnaise
                        </label>
                        <label>
                            <Field
                                name="sauces"
                                component="input"
                                type="checkbox"
                                value="guacamole"
                            />{' '}
                            Guacamole 🥑
                        </label>
                    </div>
                </div>
                <div>
                    <label>Best Stooge</label>
                    <div>
                        <label>
                            <Field
                                name="stooge"
                                component="input"
                                type="radio"
                                value="larry"
                            />{' '}
                            Larry
                        </label>
                        <label>
                            <Field
                                name="stooge"
                                component="input"
                                type="radio"
                                value="moe"
                            />{' '}
                            Moe
                        </label>
                        <label>
                            <Field
                                name="stooge"
                                component="input"
                                type="radio"
                                value="curly"
                            />{' '}
                            Curly
                        </label>
                    </div>
                </div>
                <div>
                    <label>Notes</label>
                    <Field name="notes" component="textarea" placeholder="Notes" />
                </div>*/}
                <div className="buttons">
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                    >
                        Reset
                    </button>
                </div>
                {/*<pre>{JSON.stringify(values)}</pre>*/}
            </form>
        )}
    />
);

export default Settings;