import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {NavLink} from "react-router-dom";
function Profile(props) {
	return (
		<div>

			<ProfileInfo profile={props.profile}/>
			<MyPostsContainer store={props.store}/>
		</div>
	)
}

export default Profile;