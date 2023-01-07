import React, {useEffect, useState} from "react";
import {Field, Form} from "react-final-form";
import {FormControl} from "../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../../utilits/validators/validators";
import styles from "../../Login/Login.css";
import {Formik} from "formik";

export const ProfileStatusWithHooks = (props) => {
useEffect(() => {
    setStatus(props.status)
},[props.status])
let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

const activateEditMode = () => {
    setEditMode(true)
}
const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
}
    const onStatusChange = (e) => {
       setStatus(e.currentTarget.value)
    }
        return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "----"} you </span>
                    </div>

                }
                {editMode &&
                    <div>

                        <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} type="text"
                               defaultValue={""}/>
                    </div>}
            </div>
        )
}
export default ProfileStatusWithHooks;
