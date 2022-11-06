import classes from './Dialogs.module.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";
function DialogItem(props) {
    // let path = "/Dialogs/" + props.id;
    return(

        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={"/Dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}
function Message (props){
    return(
        <div className={classes.message}>{props.message}</div>
    )
}
function Dialogs() {
    return (
        // <Routes>

        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem name="Christofer" id="1"/>
                    <DialogItem name="Violet" id="2"/>
                    <DialogItem name="Penelope" id="3"/>
                    <DialogItem name="Kate" id="4"/>
                    <DialogItem name="Chloe" id="5"/>
                    <DialogItem name="Tom" id="6"/>
                </div>
                <div className={classes.messages}>
                    <Message message="Hi"/>
                    <Message message="Hello"/>
                    <Message message="Yo"/>
                    <Message message="How are you?"/>
                    <Message message="Let's go"/>
                </div>
            </div>
        </div>

        // </Routes>
    )
}
export default Dialogs;
