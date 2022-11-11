import FriendItem from "./FriendItem/FriendItem";
import classes from "./Friends.module.css";

import React from "react";
function Friends (props) {

    let friendElement = props.friends.map(f => <FriendItem id={f.id} name={f.name} avatar={f.avatar}/>)


    return (

        <div>
            <h3 className={classes.friendsTitle}>Friends</h3>
            <div className={classes.friendsItem}>
            {friendElement}
            </div>
        </div>

    )
}
export default Friends;
