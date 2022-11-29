import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

function MyPosts(props) {
	let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)
	//ссылка на элемент
	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}
	// передаем функции текст который пользователь хочет зафиксировать
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
				</div>
				<div><button onClick={onAddPost}>Add post</button></div>

			</div>
			<div className={classes.posts}>
				{postsElement}
			</div>
		</div>
	)
}
export default MyPosts;
