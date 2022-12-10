
import Profile from "./Profile";
import {connect} from "react-redux";
import React from "react";
import { useLocation, useNavigate, useParams,} from "react-router-dom"
import {getUserProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getAuthUserData} from "../../redux/auth-reducer";
import {compose} from "redux";


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
class ProfileContainer extends React.Component {
	componentDidMount() {
		let profileId = this.props.router.params.userId;
		this.props.getUserProfile(profileId);

	}
	render() {

		return ( <Profile {...this.props} profile={this.props.profile}/>)
	}

}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})

export default compose(connect(mapStateToProps, {getUserProfile}),withRouter ,
	// withAuthRedirect
)(ProfileContainer)

