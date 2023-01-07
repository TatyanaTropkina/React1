import styles from "./Login.css"
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

export const LoginFormik = (props) => {
    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
    });
    return (
        <div>
            <Formik
                onSubmit={props.onSubmit}
                    initialValues={{
                        email: "",
                        password: "",
                        rememberMe: true
                    }}
                    validateOnBlur
                    validationSchema={SignupSchema}
                    // onSubmit = {(values, actions, ) => {
                    //     props.onSubmit(values);
                    //     actions.setSubmitting(false);
                    //     actions.resetForm({
                    //         values: {password: "",},
                    //     });
                    //     debugger
                    // }}
            >
                {({errors, touched,values, isValid, dirty, status, isSubmitting}) => (
                    <Form>

                        <div>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="email" type="email"/>
                            {errors.email && touched.email ? (<div className={'formError'}>{errors.email}</div>) : null}
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" type="password" placeholder="password"/>
                        </div>
                        <div>
                            <label htmlFor="rememberMe">
                                Remember me
                                <Field id="rememberMe" type="checkbox" name="rememberMe"/>
                            </label>
                        </div>
                            <div className={'formError' }>
                                {status}
                            </div>

                        <button type={'submit'} disabled={isSubmitting}>{isSubmitting ? 'Please wait...' : 'Submit'}</button>

                    </Form>
                )}

            </Formik>
        </div>
    )
}

function Login(props) {

    const onSubmit = (values, {setSubmitting, setStatus}) => {  // вторым параметром добавляем  setStatus
        props.login(values.email, values.password, values.rememberMe, setStatus);  // и сюда  setStatus - (это метод фотмика)
        setSubmitting(false);
    };

    if (props.isAuth) {
        return <Navigate to={"/Profile"}/>
    } else {
        return (
            <div>
                <h1>Login</h1>
                <LoginFormik onSubmit={onSubmit}/>
            </div>

        )
    }

}

const mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth,
    errors: state.auth.errors

})
export default connect(mapStateToProps, {login})(Login);