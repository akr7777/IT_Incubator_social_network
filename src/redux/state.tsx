import {DialogNamesPropsType, UserMessagesPropsType} from "../components/Messages/Messages";
import {DescriptionPropsType} from "../components/Profile/Description/Description";

let dialogsNames: Array<DialogNamesPropsType> = [
    {id: 1, name: 'Vika123'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Nika'}
];
let userMessages: Array<UserMessagesPropsType> = [
    {userID: 1, messageText: "Hi"},
    {userID: 1, messageText: "how are you???"}
];
let profileDescription: DescriptionPropsType = {name: "Dimych123", birthday: "21.02.1985", phone: "+7 (999) 123-45-67", email: "sfhskh@sifj.com"};

export type ProfilePostsPropsType1 = Array< {id: number, postText: string, likes: number} >
let profilePosts: ProfilePostsPropsType1 = [
    {id: 1, postText: "Hi, 132, this is my first post!", likes: 3},
    {id: 2, postText: "the second post!", likes: 5},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "Whats new?", likes: 1},
    {id: 3, postText: "HHHHH", likes: 1123}
];

//s--------------------------------------

let state: any = {
    profilePage: {
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
            {id: 3, postText: "Whats new?", likes: 1},
            {id: 3, postText: "Whats new?", likes: 1},
            {id: 3, postText: "Whats new?", likes: 1},
            {id: 3, postText: "Whats new?", likes: 1},
            {id: 3, postText: "Whats new?", likes: 1},
            {id: 3, postText: "HHHHH", likes: 1123}
        ]
    },
    messagesPage: {
        dialogsNames: [
            {id: 1, name: 'Vika123'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Nika'}
        ],
        userMessages: [
            {userID: 1, messageText: "Hi"},
            {userID: 1, messageText: "how are you???"}
        ],
    }
}

export default state;
