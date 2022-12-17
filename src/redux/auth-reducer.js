import {authAPI} from "../api/api";
import {getUserProfile} from "./profile-reducer";

const SET_USER_DATA = "SET_USER_DATA";
const SET_ID = "SET_ID";
const SET_STATUS = "SET_STATUS";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    photo: null,
    error: "",

}
// reducer
const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                // свойства email и Login перезатрут данные которые в initial state
                ...state,
                ...action.payload,
            }
        case SET_ID:
            return  {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return  {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}


export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}})
export const setErrors = (errors) => ({type: SET_STATUS, payload: errors})

export const getAuthUserData = () => {
    return (dispatch) => {

       return authAPI.me().then(response => {
            let {id, login, email} = response.data.data;
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(id, login, email, true));
                dispatch(getUserProfile(id));

            }
        })
    }
}

export const login = (email, password, rememberMe, setStatus, setSubmitting) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                setStatus(response.data.messages)
                setSubmitting(false)
            }
        });
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}
export default authReducer;