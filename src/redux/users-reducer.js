import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    // users: [
    //     {id: 1, photoUrl: "https://avatars.mds.yandex.net/i?id=b9a0ef17313b1e0c8ba40be45c333855-5236630-images-thumbs&n=13&exp=1", followed: true, fullName: "Roberto", status: "I'm a boss", location: {city: "Boston", country: "USA"}},
    //     {id: 2, photoUrl: "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions_505620-617.jpg", followed: false, fullName: "Ache", status: "Hi", location: {city: "Roma", country: "Italy"}},
    //     {id: 3, photoUrl: "https://avatars.mds.yandex.net/i?id=b9a0ef17313b1e0c8ba40be45c333855-5236630-images-thumbs&n=13&exp=1", followed: false, fullName: "Amelia", status: "Karma is a bitch", location: {city: "Paris", country: "France"}},
    //     {id: 4, photoUrl: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png", followed: true, fullName: "Andrey", status: "As too well", location: {city: "Osaka", country: "Japan"}},
    // ],
    users: [],
    pageSize: 10,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}
// reducer
const usersReducer = (state = initialState, action) => {
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
                return {...state, followingInProgress: action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)}

        default:
            return state;
    }
}
// action creater
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsers = (users) => {
    return{
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const requestUsersThunkCreator = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(page, pageSize).then(data => {

            dispatch(toggleIsFetching(false));
            dispatch(setCurrentPage(page))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}

export default usersReducer;