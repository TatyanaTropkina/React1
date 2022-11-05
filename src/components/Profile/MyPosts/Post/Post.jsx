import classes from './Post.module.css';
function Post(props) {
	return (
		<div className={classes.item}>
			<img src="https://avatars.mds.yandex.net/i?id=b9a0ef17313b1e0c8ba40be45c333855-5236630-images-thumbs&n=13&exp=1" alt="avatar" />
			{props.message}
			<div><span>like</span></div>
		</div>
	)
}
export default Post;