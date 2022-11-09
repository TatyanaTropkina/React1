import classes from './MyPosts.module.css';
import Post from './Post/Post';
function MyPosts(props) {
	let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)
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
				{postsElement}
			</div>
		</div>
	)
}
export default MyPosts;