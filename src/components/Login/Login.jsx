import Preloader from "../common/Preloader/Preloader";
import styles from "./Login.css"
// import { Form, Field } from 'react-final-form'
import {FormControl} from "../common/FormsControls/FormsControls";
import { FORM_ERROR } from 'final-form'
import {composeValidators, hasEmail, maxLength, required} from "../../utilits/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
// import {LoginFormik} from "./LoginTest";

import React from 'react';
import {Formik, Field, Form, useFormik} from 'formik';


// export const LoginForm = (props) => {
//     return (
//     <Form
//         onSubmit={props.onSubmit}
//         initialValues={{ rememberMe: true}}
//         render={({ handleSubmit, form, submitting, pristine, values }) => (
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Login</label>
//                     <Field name="email" component={FormControl} typeField="input" type="email" placeholder="Email"
//                         validate={required}/>
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <Field name="password" component={FormControl} typeField="input" type="password" placeholder="Password"
//                            validate={required}/>
//                 </div>
//                 <div>
//                     <label>Remember me</label>
//                     <Field name="rememberMe" component="input" type="checkbox" />
//                 </div>
//                 <div className={styles.buttons}>
//                     <button type="submit" disabled={submitting || pristine}>Login</button>
//                     <button type="button" onClick={form.reset} disabled={submitting || pristine}>Reset</button>
//                 </div>
//                 <pre>{JSON.stringify(values, 0, 2)}</pre>
//             </form>
//         )}
//     />
//
//     )
// }


export const LoginFormik = (props) => {
    return (
        <div>
            <Formik onSubmit={props.onSubmit}
                    initialValues={ {
                        email: "",
                        password: "",
                        rememberMe: true
                    }}
                    validateOnBlur
            >
                {({ errors, touched, isValid, dirty, status, isSubmitting }) => (
                    <Form>

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
                        <div>
                            {status}
                        </div>
                        {/*{touched.email && errors.email && (<div>{errors.email} hh</div>)}*/}
                        <button type={'submit'} disabled={isSubmitting}>{isSubmitting ? 'Please wait...' : 'Submit'}</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

    function Login(props) {
// debugger
//     const onSubmit = (formData) => {
//         console.log(formData)
//         props.login(formData.email, formData.password, formData.rememberMe)
//
//     }
        const onSubmit = (values, { setSubmitting, setStatus }) => {  // вторым параметром добавляем  setStatus
            props.login(values.email, values.password, values.rememberMe,setStatus);  // и сюда  setStatus - (это метод фотмика)
            setSubmitting(false);
        };

    if (props.isAuth) {
        return <Navigate to={"/Profile"}/>
    } else {
        return (
            <div>
                <h1>Login</h1>
                {/*<LoginForm onSubmit={onSubmit}/>*/}
                <LoginFormik onSubmit={onSubmit} />
            </div>

        )
    }

}
const mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth,
    errors: state.auth.errors

})
export default connect(mapStateToProps, {login})(Login);