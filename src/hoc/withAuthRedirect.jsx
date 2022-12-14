import {Navigate} from "react-router-dom";
import React from 'react';
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../redux/auth-reducer";
let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile
})
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={"/Login"} />
            }
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}
