const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {id: 1, photoUrl: "https://avatars.mds.yandex.net/i?id=b9a0ef17313b1e0c8ba40be45c333855-5236630-images-thumbs&n=13&exp=1", followed: true, fullName: "Roberto", status: "I'm a boss", location: {city: "Boston", country: "USA"}},
        {id: 2, photoUrl: "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions_505620-617.jpg", followed: false, fullName: "Ache", status: "Hi", location: {city: "Roma", country: "Italy"}},
        {id: 3, photoUrl: "https://avatars.mds.yandex.net/i?id=b9a0ef17313b1e0c8ba40be45c333855-5236630-images-thumbs&n=13&exp=1", followed: false, fullName: "Amelia", status: "Karma is a bitch", location: {city: "Paris", country: "France"}},
        {id: 4, photoUrl: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png", followed: true, fullName: "Andrey", status: "As too well", location: {city: "Osaka", country: "Japan"}},
    ]

}
// reducer
const usersReducer = (state = initialState, action) => {
    // debugger

    switch(action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}
// action creater
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users) => {
    return{
        type: SET_USERS,
        users
    }
}
export default usersReducer;