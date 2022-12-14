const SEND_MESSAGE = "SEND-MESSAGE";

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

}
const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }


}
export const sendMessageCreator = (newMessageBody) => {

    return {
        type: SEND_MESSAGE, newMessageBody
    }
}
export default dialogsReducer;