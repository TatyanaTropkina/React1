import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

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
        this.props.getAuthUserData();
// debugger
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
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {getAuthUserData, logout})(withRouter(HeaderContainer));