import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import styles from "./../../Login/Login.css"
import { Form, Field } from 'react-final-form'
import {maxLength, required, composeValidators} from "../../../utilits/validators/validators";
import {FormControl} from "../../common/FormsControls/FormsControls";


export const PostForm = (props) => {
	return (

		<Form
			onSubmit={props.onSubmit}
			initialValues={{newPost: ""}}
			render={({handleSubmit, form, submitting, pristine, values}) => (
				<form onSubmit={handleSubmit}>
					<div>
						<Field
							name="newPost"
							validate={composeValidators(required, maxLength(4))}
						component={FormControl}
							placeholder="my post"
							type="text"
							typeField="textarea"
						>
						</Field>
					</div>
					<div className={styles.buttons}>
						<button type="submit" disabled={submitting || pristine}>Add post</button>
						<button type="button" onClick={form.reset} disabled={submitting || pristine}>Reset</button>
					</div>
					<pre>{JSON.stringify(values, 0, 2)}</pre>
				</form>
			)}
		/>
	)
}

function MyPosts(props) {
	let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

	let addNewPost = (values) => {
		props.addPost(values.newPost);
	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<PostForm onSubmit={addNewPost} />
			<div className={classes.posts}>
				{postsElement}
			</div>
		</div>
	)
}
export default MyPosts;
