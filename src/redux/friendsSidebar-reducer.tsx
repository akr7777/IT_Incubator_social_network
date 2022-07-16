import { AnyAction } from "redux";

export type FriendSidebarType = {
    id: number
    name: string
    link: string
}
let initialState = [
    {id: 1, name: 'Vika', link: "https://cdn3.vectorstock.com/i/1000x1000/13/92/cartoon-avatar-woman-front-view-vector-9421392.jpg"},
    {id: 2, name: 'Sasha', link: "https://yt3.ggpht.com/a/AATXAJwoNthHklpdVHlrH4H6hFsq7mqV1R0t1_kw7g=s900-c-k-c0xffffffff-no-rj-mo"},
    {id: 3, name: 'Nika', link: "https://i.pinimg.com/236x/88/26/32/882632057c16a4f3ddd2b0eb81e1b09a.jpg"}
]

export const friendsSidebarReducer = (state: Array<FriendSidebarType> = initialState, action: AnyAction) => {
    return state;
}