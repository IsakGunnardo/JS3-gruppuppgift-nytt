import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getOnePosts } from "../api/fetch";

export function OnePost() {
  const {id} = useParams();
  const [onePost,setOnePost] = useState([]);
  useEffect(() => {
    getOnePosts({id}).then((result) => setOnePost(result.posts));
  }, []);
  console.log(onePost);

    return (
    <>
        {/* {posts.map((post) => (
          <span>{post.body}</span>
        ))} */}
    <h1>Visar en Post + ID:{id}</h1>;

  {onePost.map((holder, index) => ( 
  <li key={index} style={{ borderBottom: "1px solid black" }}>
    <h3 >Title: {holder.title}</h3>
    <main>{holder.body}</main>
    <h4>
      Creator: {/* {users[index].firstName} {users[index].lastName} */}
    </h4>
    {/* <img src={users[index].image} width={25} height={25} /> */}
  </li>
  ))}
  </>)}
  {/*
  import { useState } from "react";
  import { getOnePosts } from "../api/fetch";
  
  export function OnePost () {
  
      const [onePost,setOnePost] = useState([]);
      
    useEffect(() => {
      getOnePosts().then((result) => setOnePosts(result.posts));
    }, []);
      
      return (<>
      
      
      </>)
      */}
