import { atom } from "recoil";

export const postState = atom({
    key: "posting",
    default: []
})
// const [postState, setPostState] = useState([])

export const commentState = atom({
    key: "commenting",
    default: []
})

export const userState = atom({
    key: "users",
    default: []
})

export const addNewPost = atom ({
    key: "addNewPost",
    default: {}

})

