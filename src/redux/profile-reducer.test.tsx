import { addPostActionCreator, profileReducer } from "./profile-reducer"


it('length should be incremented', () => {
    //1. test data
    let action = addPostActionCreator();
    let state = {
        profile: {
            userId: 1,
            contacts: {
                facebook: null,
                website: null,
                vk: null,
                twitter: null,
                instagram: null,
                youtube: null,
                github: null,
                mainLink: null,
            },
            lookingForAJob: false,
            lookingForAJobDescription: "sfhskh@sifj.com",
            fullName: 'sdffsd',
            photos: {
                small: 'dsf',
                large: 'dsf',
            }
        },
        profilePosts: [
            {id: 1, postText: "Hi, 132, this is my first post!", likes: 3},
            {id: 2, postText: "the second post!", likes: 5},
            {id: 3, postText: "Whats new?", likes: 1},
        ],
        updatedPostText_inTextArea: "text post",
        status: '97',
        //profile: null,
    };


    //2. action
    let newState = profileReducer(state, action);


    //3.expectation
    expect(newState.profilePosts.length).toBe(4);
})