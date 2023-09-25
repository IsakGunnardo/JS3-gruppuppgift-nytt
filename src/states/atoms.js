import { atom } from "recoil";
export const postState = atom({
  key: "posting",
  default: [],
});

export const commentState = atom({
  key: "commenting",
  default: [],
});

export const userState = atom({
  key: "users",
  default: [],
});

export const addNewPost = atom({
  key: "addNewPost",
  default: {
    firstName: "",
    lastName: "",
    image: "",
    reactions: 0,
  },
});

export const allDatasState = atom({
  key: "allData",
  default: [],
});
