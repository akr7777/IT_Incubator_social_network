import React from "react";
import ccs_classes from "./Description.module.css";

const Description = () => {
    return (
        <div className={ccs_classes.description}>
            <div>Name: -------</div>
            <div>Birthdate: -----</div>
            <div>Phone: -------</div>
            <div>email: -------</div>
        </div>
    );
}

export default Description;
