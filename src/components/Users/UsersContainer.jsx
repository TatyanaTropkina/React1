import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import UsersC from "./UsersC";
let mapToStateToProps = (state) => {
    return {
        // берем из redux-store
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }

    }
}
const UsersContainer = connect(mapToStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;