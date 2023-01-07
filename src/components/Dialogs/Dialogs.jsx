import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";

import styles from "./../../components/Login/Login.css"
// import {Form, Field} from 'react-final-form'
// import {FormControl} from "../common/FormsControls/FormsControls";
// import {required} from "../../utilits/validators/validators";
import {Formik, Form, Field} from 'formik';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    newMessageBody: Yup.string()
        .required("You can't send empty message")
});


export const MessageForm = (props) => {
    return (
        <div>

            <Formik
                initialValues={{
                    newMessageBody: ""
                }}
                validationSchema={SignupSchema}
                onSubmit = {(values, actions, ) => {
                    props.onSubmit(values);
                    actions.setSubmitting(false);
                    actions.resetForm({
                        values: {newMessageBody: "",},
                    });
                }}
            >
                {({errors, values,touched, isSubmitting}) => (
                    <Form>
                        <Field name="newMessageBody">
                            {({field, form, meta}) => (
                                <div>
                                    <textarea type="text" {...field} placeholder="my message"/>
                                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                                </div>
                            )}

                        </Field>
                        <div>
                            <button type="submit" disabled={isSubmitting}>Send message</button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
        // <Form
        //     onSubmit={props.onSubmit}
        //     initialValues={{newMessageBody: ""}}
        //     render={({handleSubmit, form, submitting, pristine, values}) => (
        //         <form onSubmit={handleSubmit}>
        //             <div>
        //                 <Field name="newMessageBody" component={FormControl} type="text" typeField="textarea"
        //                        placeholder="My message" validate={required}/>
        //             </div>
        //             <div className={styles.buttons}>
        //                 <button type="submit" disabled={submitting || pristine}> Send message</button>
        //                 <button type="button" onClick={form.reset} disabled={submitting || pristine}>Reset</button>
        //             </div>
        //             <pre>{JSON.stringify(values, 0, 2)}</pre>
        //         </form>
        //     )}
        // />

    )
}

function Dialogs(props) {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) {
        return <Navigate to={"/Login"}/>
    }
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    <div>{messagesElements}</div>
                </div>

            </div>
            <MessageForm onSubmit={addNewMessage}/>
        </div>

    )
}

export default Dialogs;
