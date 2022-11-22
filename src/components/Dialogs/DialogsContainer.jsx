import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage;
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
