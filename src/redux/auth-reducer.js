import {authAPI} from "../api/api";
import {getUserProfile} from "./profile-reducer";

const SET_USER_DATA = "SET_USER_DATA";
const SET_ID = "SET_ID";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    photo: null

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

        default:
            return state;
    }
}


export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}})

export const getAuthUserData = () => {
    return (dispatch) => {

        authAPI.me().then(response => {
            let {id, login, email} = response.data.data;
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(id, login, email, true));
                // profileAPI.getId(id).then(response => {
                //     dispatch(setUserId(response.data))
                // })

                dispatch(getUserProfile(id));

            }
        })
    }
}
export const login = (email,password,rememberMe) => {
    return (dispatch) => {
        authAPI.login(email,password,rememberMe).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
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