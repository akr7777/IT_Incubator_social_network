import React from "react";
import ccs_classes from "./Description.module.css";

export type DescriptionPropsType = {
    name: string,
    birthday: string,
    phone: string,
    email: string
}

export const Description = (props: any) => {
    return (
        <div className={ccs_classes.description}>
            <div>Name: {props.profileDescription.name}</div>
            <div>Birthdate: {props.profileDescription.birthday}</div>
            <div>Phone: {props.profileDescription.phone}</div>
            <div>email: {props.profileDescription.email}</div>
        </div>
    );
}

/*
export default Description;
*/
