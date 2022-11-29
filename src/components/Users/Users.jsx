import styles from './Users.module.css'
import axios from "axios"
function Users(props) {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            // debugger;
            alert("hi")
            props.setUsers(response.data.items)
        });
        // axios.get('https://social-network.samuraijs.com/api/1.0/users')
        //     .then(function (response) {
        //         // handle success
        //         // console.log(response);
        //         debugger;
        //         props.setUsers()
        //     })

    }

    return(
        <div>
            {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id) }}>Follow</button>}

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
export default Users;