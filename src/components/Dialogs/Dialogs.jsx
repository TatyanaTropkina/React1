import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

function Dialogs(props) {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map ( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map (m => <Message message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody;
let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
}
let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))

}
    return (
    <div>
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>


            </div>

        </div>
    </div>

)
}

export default Dialogs;
