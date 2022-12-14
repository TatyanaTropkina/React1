import preLoader from "../../../assets/images/pleLoader.svg";
import classes from "./Preloader.module.css"
import React from "react";

let Preloader = (props) => {
    return (
        <div>
            <img className={classes.preloader} src={preLoader}/>
        </div>
    )
}
export default Preloader;