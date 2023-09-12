import { atom } from "recoil";

export const postState = atom({
    key: "posting",
    default: []
})

export const commentState = atom({
    key: "commenting",
    default: []
})

export const userState = atom({
    key: "users",
    default: []
})