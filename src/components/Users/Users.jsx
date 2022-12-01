import styles from './Users.module.css'
import axios from "axios"
import React from "react"

class Users extends React.Component {
    constructor(props) {
        super(props);
        // if(this.props.users.length === 0) {
            axios.get("http://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        // }
    }
    render() {

        return (
            <div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {this.props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => {this.props.follow(u.id) }}>Follow</button>}

                </div>
            </span>
                        <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </span>
                    </div>)
                }
            </div>
        )
    }
}
export default Users;