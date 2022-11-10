import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
function Dialogs(props) {

    let dialogsElements = props.state.dialogs.map ( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map (m => <Message message={m.message} id={m.id}/>);
    let newMessageElement = React.createRef();
let sendMessage = () => {
    let text = newMessageElement.current.value;
    alert("g")
}
    return (
    <div>
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    </div>

)
}

export default Dialogs;
