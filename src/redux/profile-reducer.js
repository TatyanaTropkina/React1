import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS ="SET_STATUS";


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "First post", likesCount: 24}
    ],

    profile: null,
    status: ""

}
const profileReducer = (state = initialState, action) => {
    // debugger

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                // сообщение сидит в newPostText в state
                message: action.newPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],

            }

        case SET_USER_PROFILE:
            return {
                // копия стейта
                ...state,
                //profile который придет в AC
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}
// Action Creators
export const addPostActionCreator = (newPost) => {
    return {
        type: ADD_POST, newPost
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}


// Thunk
export const getUserProfile = (userId) => {

    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}
export const getStatus = (userId) => (dispatch) =>{
    // return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))

    })


    // }
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));

        }
    })
}

export default profileReducer;