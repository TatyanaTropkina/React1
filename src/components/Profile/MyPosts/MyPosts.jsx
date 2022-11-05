import classes from './MyPosts.module.css';
import Post from './Post/Post';
function MyPosts() {
	return (
		<div>
			my posts
			<div>new post</div>
			<div className={classes.posts}>
				<Post message="Hi, how are you?" />
				<Post message="First post" />
				<Post />
				<Post />
			</div>
		</div>
	)
}
export default MyPosts;