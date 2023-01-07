import React from "react";
import {Field, Form} from "react-final-form";
import {FormControl} from "../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../../utilits/validators/validators";
import styles from "../../Login/Login.css";
import {Formik} from "formik";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({editMode: true})

    }

    deactivateMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateMode}>{this.props.status || "----"}</span>
                    </div>

                }
                {this.state.editMode &&
                    <div>

                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateMode} type="text"
                               defaultValue={this.state.status}/>
                    </div>}
            </div>
        )
    }


}
export default ProfileStatus;
