import {actionPropsType, state_ProfilePage_PropsType} from "./state";

const add_Post = 'ADD-POST';
const update_new_post_text = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    profileDescription: {
        name: "Dimych123",
        birthday: "21.02.1985",
        phone: "+7 (999) 123-45-67",
        email: "sfhskh@sifj.com"
    },
    profilePosts: [
        {id: 1, postText: "Hi, 132, this is my first post!", likes: 3},
        {id: 2, postText: "the second post!", likes: 5},
        {id: 3, postText: "Whats new?", likes: 1},
    ],
    updatedPostText_inTextArea: "IT NDV"
}

export const profileReducer = (state: state_ProfilePage_PropsType = initialState, action: actionPropsType) => {

    switch (action.type) {
        case add_Post: {
            let newPost = {
                id: 4,
                postText: state.updatedPostText_inTextArea,
                likes: 0
            }
            return {
                ...state,
                updatedPostText_inTextArea: "",
                profilePosts: [...state.profilePosts, newPost]
            }
            /*copyState.profilePosts = [...state.profilePosts, newPost]*/
            /*copyState.profilePosts.push(newPost);
            copyState.updatedPostText_inTextArea = "";*/
            /*return copyState;*/
        }
        case update_new_post_text: {
            return {
                ...state,
                updatedPostText_inTextArea: action.newText
            }
            /*let copyState = {...state}
            if (typeof (action.newText) === 'string') {
                copyState.updatedPostText_inTextArea = action.newText;
            }
            return copyState;*/
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: add_Post
    }
}
export const updateTextAreaActionCreator = (text: string) => {
    return {
        type: update_new_post_text,
        newText: text
    }
}