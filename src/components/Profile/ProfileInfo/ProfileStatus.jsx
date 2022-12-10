import React from "react";
class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateMode() {
        this.setState({editMode: true})

    }

    deactivateMode() {
        this.setState({editMode: false})

    }
    render() {

        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateMode.bind(this)} >{this.props.status}</span>
                    </div>

                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateMode.bind(this)} type="text" defaultValue={this.props.status}/>
                    </div>}
            </div>
        )
    }


}

export default ProfileStatus;