import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setUserPhoto, setUserProfile, setUserProfilePhoto} from "../../redux/auth-reducer";

import {useLocation, useNavigate, useParams,} from "react-router-dom"

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class HeaderContainer extends React.Component {
    componentDidMount() {

        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        }).then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email)
                }
            // let profileId = this.props.router.params.userId;
            // if(profileId != null) {
            //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`, { withCredentials: true})
            //         .then(response => {
            //             this.props.setUserProfile(response.data);
            //             debugger
            //         })
            // }
            })
    }

    render() {

        return (
            // <Header {...this.props} profile={this.props.profile} />
            <Header {...this.props} />
        )
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    // profile: state.auth.profile,
})

export default connect(mapStateToProps, {setAuthUserData})(withRouter(HeaderContainer));