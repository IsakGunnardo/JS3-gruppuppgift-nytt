import "./App.css";
import "./components/aside.css";
import React from "react";
import { useEffect, useState } from "react";

import { Main } from "./components/main";
import { Home } from "./pages/home";
import { AddNewPost } from "./pages/addnewpost";
import { OnePost } from "./pages/post";
import { getAllPosts, getAllComments, getAllUsers } from "./api/fetch";
import { AsideLeft } from "./components/asideleft";
import { AsideRight } from "./components/asideright";

import Navigator from "./components/navigator";
import { Route, Routes, useLocation } from "react-router-dom";

import { useRecoilState } from "recoil";
import { postState, userState, commentState } from "./states/atoms";

function App() {
  const [posts, setPosts] = useRecoilState(postState);
  const [comments, setComments] = useRecoilState(commentState);
  const [users, setUsers] = useRecoilState(userState);

  const location = useLocation();
  const isAddNewPostRoute = location.pathname === "/addnewpost";

  const scrollBackTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getAllPosts().then((result) => setPosts(result.posts));
    getAllComments().then((result) => setComments(result.comments));
    getAllUsers().then((result) => setUsers(result.users));
  }, []);

   //<Home posts={posts} users={users} />;  denna överflödig?

  return (
    <>
      <Navigator />
      <div className="container-appjs">
      {!isAddNewPostRoute && ( <AsideLeft /> )}
      <Routes>        
        <Route path="/" element={<Home posts={posts} users={users} />} />
        <Route path="/addnewpost" element={<AddNewPost />} />
        <Route path="/post/:id/:firstName/:lastName" element={<OnePost />} />
      </Routes>
      {!isAddNewPostRoute && ( <AsideRight /> )}
      </div>      
      <div className="content-container"></div>
      <button className="scroll-btn" onClick={scrollBackTop}>
        Back to top
      </button>
    </>
  );
}

export default App;



/*
/*

// https://reactrouter.com/en/main/hooks/use-navigate

function CommentKomponent ({ comments }) {
  return (
    <ul>
      {comments.map((holder, index) => {
        return (
        <li key={index}>{holder.body} </li>
      )})}
    </ul>
  )
}
*/
/* function PostKomponent({ posts }) {
  return (
    <ul>
      {posts.map((holder, index) => (
        <li key={index}>{holder.body}</li>
      ))}
    </ul>
  );
} <h1>Users</h1>
 <PostKomponent posts={posts} />       <PeopleList users={users} />
       
        <h2>Comments</h2>
        <CommentKomponent comments={comments} />   */

//const [posts, setPosts] = useState([]);

//console.log("USERS: ", users);
//console.log("POSTS: ", posts);




/*
const AddPostViewConst = {} => (
  <div>
    <AddNewPost />
  </div>
)
*/