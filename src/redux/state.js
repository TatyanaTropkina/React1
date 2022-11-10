let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 15},
            {id: 2, message: "First post", likesCount: 24}
        ],

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
    friends: [
        {id: 1, name: "Scott Francis", avatar: "https://avatars.mds.yandex.net/i?id=b9a0ef17313b1e0c8ba40be45c333855-5236630-images-thumbs&n=13&exp=1"},
        {id: 2, name: "Andrew Evans", avatar: "https://pin.it/3ChFZYl"},
        {id: 1, name: "Scarlett Jhonas", avatar: "https://pin.it/1hdldIG"}
    ]
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
}
export default state;