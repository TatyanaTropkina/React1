import {authAPI, usersAPI} from "../api/api";
import profile from "../components/Profile/Profile";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PHOTO = "SET_USER_PHOTO";
const GET_AUTH_USER_PROFILE = "GET_AUTH_USER_PROFILE";

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
                ...action.data,
                isAuth: true

            }
        // case SET_USER_PHOTO:
        //     return {
        //         ...state,
        //         photo: action.profile
        //     }
        // case GET_AUTH_USER_PROFILE:
        //     return  {
        //         ...state,
        //         profile: action.profile
        //     }

        default:
            return state;
    }
}


export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}})
// export const setUserPhoto = (profile) => ({type: SET_USER_PHOTO}, profile)

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            let {id, login, email} = response.data.data;
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(id, login, email));
            }
        })

    }
}
// export const getPhoto = (userId) => {
//     return (dispatch) => {
//         usersAPI.getPhoto(userId).then(response => {
//             debugger
//             if (response.data.resultCode === 0) {
//                  dispatch(setUserPhoto(profile))
//             }
//         })
//     }
// }

export default authReducer;