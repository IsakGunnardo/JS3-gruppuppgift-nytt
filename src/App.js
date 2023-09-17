import "./App.css";
import { useEffect, useState } from "react";
import React from "react";

import { Home } from "./pages/home";
import { AddNewPost } from "./pages/addnewpost";
import { OnePost } from "./pages/post";
import { getAllPosts, getAllComments, getAllUsers } from "./api/fetch";

import Navigator from "./components/navigator";
import { Route, Routes } from "react-router-dom";

import { useRecoilState } from "recoil";
import { postState, userState, commentState } from "./states/atoms";

function App() {
  const [posts, setPosts] = useRecoilState(postState);
  const [comments, setComments] = useRecoilState(commentState);
  const [users, setUsers] = useRecoilState(userState);

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

  <Home posts={posts} users={users} />;

  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home posts={posts} users={users} />} />
       <Route path="/addnewpost" element={<AddNewPost />} />
        <Route path="/post/:id/:firstName/:lastName" element={<OnePost />} />
      </Routes>
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
