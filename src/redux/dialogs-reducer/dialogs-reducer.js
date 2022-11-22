const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
    dialogs: [
        {id: 1, name: "Christofer"},
        {id: 2, name: "Violet"},
        {id: 3, name: "Penelope"},
        {id: 4, name: "Kate"},
        {id: 5, name: "Chloe"},
        {id: 6, name: "Tom"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "Yo"},
        {id: 4, message: "How are you?"},
        {id: 5, message: "Let's go"}
    ],
    newMessageBody: ""
}
const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }


}
export const sendMessageCreator = () => {

    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}
export default dialogsReducer;