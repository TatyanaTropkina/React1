import classes from './MyPosts.module.css';
import Post from './Post/Post';
function MyPosts() {
	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div><button>Add post</button></div>

			</div>
			<div className={classes.posts}>
				<Post message="Hi, how are you?" likesCount="23" />
				<Post message="First post" likesCount="40" />
				<Post />
				<Post />
			</div>
		</div>
	)
}
export default MyPosts;