import React from 'react';
import ReactDOM from 'react-dom';
import {Formik, Field, Form, useFormik} from 'formik';


export const LoginFormik = (props) => {
    const onSubmit = (values, { setSubmitting, setStatus }) => {  // вторым параметром добавляем  setStatus
        props.login(values.email, values.password, values.rememberMe,setStatus);  // и сюда  setStatus - (это метод фотмика)
        setSubmitting(false);
    };
    return (
        <div>

            <Formik onSubmit={onSubmit}
                    initialValues={ {
                        email: "",
                        password: "",
                        rememberMe: true
                    }
                    }
                    validateOnBlur

                    // validationSchema={validationsSchema}
            >
                {({ errors, touched, isValid, dirty, status, isSubmitting }) => (
                    <Form>
                        {status}
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field name="email" placeholder="email" type="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field name="password"/>
                        </div>
                        <div>
                            <label>
                                <Field type="checkbox" name="rememberMe" />
                                remember me
                            </label>
                        </div>
                        {/*<button type="submit" disabled={isSubmitting}>*/}
                        {/*    Submit*/}
                        {/*</button>*/}
                        {touched.email && errors.email && (
                            <div>{errors.email}</div>
                        )}
                        <button type={'submit'}
                                disabled={isSubmitting}

                        >{isSubmitting ? 'Please wait...' : 'Submit'}</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}
