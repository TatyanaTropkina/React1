import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Formik, Form, Field} from 'formik';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    newPost: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),

});

export const PostForm = (props) => {

		return (
			<div>

				<Formik
					initialValues={{
						newPost: ""
					}}
					validationSchema={SignupSchema}
					onSubmit={(values, actions) => {
						props.onSubmit(values).then(() => {
							actions.setSubmitting(false);
							actions.resetForm({
								values: {
									newPostTest: '',
								},
							});
						});
					}}
				>
					{({errors, values,touched, isSubmitting}) => (
						<Form>
							<Field name="newPost">
								{({field, form, meta}) => (
									<div>
										<textarea type="text" {...field} placeholder="my post"/>
										{meta.touched && meta.error && <div className="error">{meta.error}</div>}
									</div>
								)}

							</Field>
							<div>
								<button type="submit" disabled={isSubmitting}>Add post</button>
							</div>

						</Form>
					)}
				</Formik>
			</div>
		)};

function MyPosts(props) {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let addNewPost = (values) => {
    	props.addPost(values.newPost);
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <PostForm onSubmit={addNewPost}/>
			<div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;
