import {DialogNamesPropsType, UserMessagesPropsType} from "../components/Messages/Messages";
import {DescriptionPropsType} from "../components/Profile/Description/Description";

/*
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
*/
export type ProfilePostsPropsType1 = Array< {id: number, postText: string, likes: number} >

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
            {id: 1, name: 'Vika', img_link: "https://townsquare.media/site/71/files/2020/05/Screen-Shot-2020-05-19-at-7.17.13-AM.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"},
            {id: 2, name: 'Sasha', img_link: "https://yt3.ggpht.com/a/AATXAJwoNthHklpdVHlrH4H6hFsq7mqV1R0t1_kw7g=s900-c-k-c0xffffffff-no-rj-mo"},
            {id: 3, name: 'Nika', img_link: "https://i.pinimg.com/236x/88/26/32/882632057c16a4f3ddd2b0eb81e1b09a.jpg"}
        ],
        userMessages: [
            {userID: 1, messageText: "Hi"},
            {userID: 1, messageText: "how are you???"},
            {userID: 2, messageText: "Hi! Iam fine, and u?"}
        ],
    },
    friendsSidebar: [
        {id: 1, name: 'Vika', link: "https://townsquare.media/site/71/files/2020/05/Screen-Shot-2020-05-19-at-7.17.13-AM.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"},
        {id: 2, name: 'Sasha', link: "https://yt3.ggpht.com/a/AATXAJwoNthHklpdVHlrH4H6hFsq7mqV1R0t1_kw7g=s900-c-k-c0xffffffff-no-rj-mo"},
        {id: 3, name: 'Nika', link: "https://i.pinimg.com/236x/88/26/32/882632057c16a4f3ddd2b0eb81e1b09a.jpg"}
    ]
}

export default state;
