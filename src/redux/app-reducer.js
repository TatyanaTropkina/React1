
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


let initialState = {
    initializedSuccess: false,


}
// reducer
const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initializedSuccess: true,
            }
        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())

        // promise.then(()=> {
        //     dispatch(initializedSuccess())
        // })

    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess())
    })
}

export default appReducer;