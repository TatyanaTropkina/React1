import classes from "./FriendItem.module.css";
function FriendItem (props) {
    return(

        <a className={classes.friendItem} id={props.id} href="#">
            <img className={classes.friendImg} src={props.avatar} alt="avatar" />
            <h6 className={classes.friendName}>{props.name}</h6>
        </a>
    )
}
export default FriendItem;