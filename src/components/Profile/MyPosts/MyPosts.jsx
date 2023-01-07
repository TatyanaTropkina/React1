import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, Form, Formik} from 'formik';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    newPost: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),

});

function PostForm(props) {
    return (
        <div>

            <Formik
                initialValues={{
                    newPost: ""
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions,) => {
                    props.onSubmit(values);
                    actions.setSubmitting(false);
                    actions.resetForm({
                        values: {newPost: "",},
                    });
                }}
            >
                {({errors, values, touched, isSubmitting}) => (
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
    )
};

const MyPosts = React.memo( props => {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props || nextState !== this.state;
    // }


        let postsElement = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

        let addNewPost = (values) => {
            this.props.addPost(values.newPost);

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
)
export default MyPosts;
