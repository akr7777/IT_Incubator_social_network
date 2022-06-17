import React from "react";
import {NavLink} from "react-router-dom";

const NotFoundPage = () => {
    return(
        <>
            <div>
                This Page does not exist. <NavLink to="/"> Go to main page</NavLink>
            </div>
        </>
    );
}

export default NotFoundPage;