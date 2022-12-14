import styles from "./FormsControls.module.css"
import React from "react";

export const FormControl = ({input, meta, ...props}) => {
    // debugger
    const Element = props.typeField;

    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
// export const Textarea = (props) => {
// const {input, meta, child, ...restProps} = props;
//     return (
//         <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
//     )
// }
// export const Input = (props) => {
//     const {input, meta, child, ...restProps} = props;
//     return (
//         <FormControl {...props}><input {...input} {...restProps}/></FormControl>
//     )
// }
