import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS ="SET_STATUS";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "First post", likesCount: 24}
    ],
    newPostText: "",
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
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
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
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
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
export const getUserProfile = (profileId) => {

    return (dispatch) => {
        usersAPI.getProfile(profileId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}
export const getStatus = (userId) => (dispatch) =>{
    // return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            debugger
            dispatch(setStatus(response.data))
        })
    // }
}
export const updateStatus = (status) => (dispatch) => {
    // return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    // }
}
export default profileReducer;