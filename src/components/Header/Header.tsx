import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            {/*<img src={"https://img.freepik.com/psd-gratis/logomodel-op-grijze-muur_35913-2122.jpg?w=2000"}/>*/}
            <img src={"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
        </header>
    );
}

export default Header;