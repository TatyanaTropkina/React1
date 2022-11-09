import classes from './../Dialogs.module.css';
import {NavLink, Route, Routes} from "react-router-dom";

function DialogItem(props) {
    // let path = "/Dialogs/" + props.id;
    return (

        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={"/Dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;
