let store = {
    //свойство
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 15},
                {id: 2, message: "First post", likesCount: 24}
            ],
            newPostText: "hi"

        },
        dialogsPage: {
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
            ]
        },
        friends : [
            {id: 1, name: "Scott Francis", avatar: "https://avatars.mds.yandex.net/i?id=b9a0ef17313b1e0c8ba40be45c333855-5236630-images-thumbs&n=13&exp=1"},
            {id: 2, name: "Andrew Evans", avatar: "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions_505620-617.jpg"},
            {id: 1, name: "Scarlett Jonas", avatar: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"}
        ]
    },
    // метод
    _callSubscriber() {
        console.log("state was changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // Добавляем новый пост, Push - метод массива. Помещаем новый пост в массив.
    addPost() {
        let newPost = {
            id: 5,
            // сообщение сидит в newPostText в state
            message: this._state.profilePage.newPostText,
            likesCount:0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    // Получаем текст в textarea и присваеваем это значение в state как новый текст
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    // dispatch(action) { // type: "ADD-POST"
    //     if(action.type = "ADD-POST") {
    //         let newPost = {
    //             id: 5,
    //             // сообщение сидит в newPostText в state
    //             message: this._state.profilePage.newPostText,
    //             likesCount:0
    //         };
    //         this._state.profilePage.posts.push(newPost);
    //         this._state.profilePage.newPostText = '';
    //         this._callSubscriber(this._state);
    //     }
    // }

}

window.store = store;
export default store;
