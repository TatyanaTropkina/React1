import React from "react";
import {Field, Form} from "react-final-form";
import {FormControl} from "../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../../utilits/validators/validators";
import styles from "../../Login/Login.css";

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
            debugger
            alert("ggf")
        }
    }

    render() {

        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateMode}>{this.props.status || "999"}</span>
                    </div>

                }
                {this.state.editMode &&
                    <div>
                        {/*<Form*/}
                        {/*    onSubmit={this.onStatusChange}*/}
                        {/*    initialValues={{status: ""}}*/}

                        {/*    render={({handleSubmit, form, submitting, pristine, values}) => (*/}
                        {/*        <form onSubmit={handleSubmit}>*/}
                        {/*            <div>*/}
                        {/*                <Field name="status" component={FormControl} type="text" typeField="input" placeholder="My status" validate={maxLength(30)}*/}
                        {/*                       autoFocus={true}*/}
                        {/*                       onBlur={this.deactivateMode}*/}
                        {/*                       defaultValue={this.state.status}*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*            /!*<div className={styles.buttons}>*!/*/}
                        {/*            /!*    <button type="submit" disabled={submitting || pristine}> Send message </button>*!/*/}
                        {/*            /!*    <button type="button" onClick={form.reset} disabled={submitting || pristine}>Reset</button>*!/*/}
                        {/*            /!*</div>*!/*/}
                        {/*            <pre>{JSON.stringify(values, 0, 2)}</pre>*/}
                        {/*        </form>*/}
                        {/*    )}*/}
                        {/*/>*/}
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateMode} type="text"
                               defaultValue={this.state.status}/>
                    </div>}
            </div>
        )
    }


}

export default ProfileStatus;