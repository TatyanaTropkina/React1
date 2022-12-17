
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
