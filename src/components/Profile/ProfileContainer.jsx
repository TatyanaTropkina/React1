
import Profile from "./Profile";
import {connect} from "react-redux";
import React from "react";
import { useLocation, useNavigate, useParams,} from "react-router-dom"
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getAuthUserData} from "../../redux/auth-reducer";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";
import Login from "../Login/Login";
import {sendMessageCreator} from "../../redux/dialogs-reducer";


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
		let userId = this.props.router.params.userId;

		if (!userId) {
			withAuthRedirect(Login);
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId)


	}
	render() {

		return ( <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>)
	}

}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status
})

export default compose(connect(mapStateToProps, { getUserProfile, getStatus, updateStatus}),withRouter ,
	withAuthRedirect,
)(ProfileContainer)

