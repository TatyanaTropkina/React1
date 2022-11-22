
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}
let mapDispatchToProps = (dispatch) => {
	return{
		//callback name
		updateNewPostText: (text) => {
			let action = updateNewPostTextActionCreator(text)
			dispatch(action);
			// dispatch(updateNewPostTextActionCreator(text))
		},
		addPost: () => {
			dispatch(addPostActionCreator());
		}

	}
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
