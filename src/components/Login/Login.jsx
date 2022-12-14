import Preloader from "../common/Preloader/Preloader";
import styles from "./Login.css"
import { Form, Field } from 'react-final-form'
import {FormControl} from "../common/FormsControls/FormsControls";
import {composeValidators, hasEmail, maxLength, required} from "../../utilits/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
export const LoginForm = (props) => {
    // debugger
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
// const onSubmit = async values => {
//         await sleep(300)
//         window.alert(JSON.stringify(values, 0, 2))
//     }
    return (

    <Form
        onSubmit={props.onSubmit}

        initialValues={{ rememberMe: true}}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Login</label>
                    <Field name="email" component={FormControl} typeField="input" type="email" placeholder="Email"
                        validate={composeValidators(required, hasEmail)}/>
                </div>
                <div>
                    <label>Password</label>
                    <Field name="password" component={FormControl} typeField="input" type="password" placeholder="Password"
                           validate={required}/>
                </div>
                <div>
                    <label>Remember me</label>
                    <Field name="rememberMe" component="input" type="checkbox" />
                </div>

                <div className={styles.buttons}>
                    <button type="submit" disabled={submitting || pristine}>Login</button>
                    <button type="button" onClick={form.reset} disabled={submitting || pristine}>Reset</button>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
        )}
    />

    )
}


function Login(props) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    // const onSubmit = async values => {
    //     await sleep(300)
    //     window.alert(JSON.stringify(values, 0, 2))
    // }
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={"/Profile"}/>
    } else {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={onSubmit}/>
            </div>

        )
    }

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);