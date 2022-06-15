import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return(
        <>
            <div>
                This Page does not exist.
            </div>
            <div>
                <Link to="/"> Go to main page</Link>
            </div>

        </>
    );
}

export default NotFoundPage;