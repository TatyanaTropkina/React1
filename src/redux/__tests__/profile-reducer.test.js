import profileReducer, {addPostActionCreator, deletePost} from "../profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "First post", likesCount: 24}
    ]

}

test('new post should be added', () => {
    // test data
    let action = addPostActionCreator("new post, hi")

    //action
    let newState = profileReducer(state,action)
    //expectation
        // тут id
    expect(newState.posts.length).toBe(3)

});

test('new message correct', ()=> {
    let action = addPostActionCreator("new post, hi")

    let newState = profileReducer(state,action)
    //тут индекс
    expect(newState.posts[2].message).toBe("new post, hi")
})
test('after deleting length should decrement', ()=> {
    let action = deletePost(1)

    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(1)
})

test(`after deleting length shouldn't be decrement if id isn't correct`, ()=> {
    let action = deletePost(1000)

    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(2)
})