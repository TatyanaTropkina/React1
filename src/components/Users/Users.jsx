import styles from "./Users.module.css";
import React from "react";
import userPhoto from "../../assets/images/user-avatar.png"
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
        for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }


    return (
        <div>

            <div>
                {pages.map(p => {

                    return (
                        <span className={props.currentPage === p ? styles.selectedPage : ""}
                              onClick={()=> {props.onPageChanged(p)}} >{p + " "}</span>)}
                )}

            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            <div>
                                <NavLink to={"./../profile/" + u.id}>
                                <img src={u.photos.small  != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>{u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "4356f2de-2f73-4b08-b680-2d10647fbac8"
                                        }
                                    }).then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        props.toggleFollowingProgress(false, u.id);
                                        })
                                    } }>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id )} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY":"4356f2de-2f73-4b08-b680-2d10647fbac8"
                                        }
                                    }).then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        props.toggleFollowingProgress(false, u.id);
                                        })
                                    } }>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                {/*<div>{u.location.city}</div>*/}
                                {/*<div>{u.location.country}</div>*/}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Users;