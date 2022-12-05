const SET_USER_DATA = "SET_USER_DATA";
// const SET_USER_PROFILE =  "SET_USER_PROFILE";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    profile: null,
    // profilePhoto: null
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
        // case SET_USER_PROFILE:
        //     return {
        //         // копия стейта
        //         ...state,
        //         //profile который придет в AC
        //         profile: action.profile
        //
        //     }

        default:
            return state;
    }
}


export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}})
// export const setUserProfile = (profile) => {
//     return {
//         type: SET_USER_PROFILE,
//         profile
//     }
// }


export default authReducer;