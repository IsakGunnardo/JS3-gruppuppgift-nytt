export async function getAllPosts() {
  try {
    let result = await fetch("https://dummyjson.com/posts");
    if (!result.ok) {
      throw new Error("Fetch failure");
    }
    let json = await result.json();
    return json;
  } catch (error) {
    throw error;
  }
}

export async function getAllComments() {
  let result = await fetch("https://dummyjson.com/comments");
  let json = await result.json();
  return json;
}

export async function getAllUsers() {
  let result = await fetch("https://dummyjson.com/users");
  let json = await result.json();
  return json;
}

export async function getOnePosts({ id }) {
  let result = await fetch(`https://dummyjson.com/posts/${id}`);
  let json = await result.json();
  return json;
}
//används ej än är till addpost.js
export function addAPost(title, text, id) {
  fetch("https://dummyjson.com/posts/add", {
export async function fetchAPost(title, body, id, ) {

  let result = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      body: text
      userId: id,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
      body: body,
      Id: 151,
      userId: id
    })
  });
  let json = await result.json();
    return json;
}

   
/*
import { useEffect, useState } from "react";
//Försöka att skapa en 
export function getAllComments({comments}) {
    const [api, setApi] = useState("posts");
    const comments = () => {setApi(...api, comments)}
    
 
    useEffect(() => {
        let result = await fetch(`https://dummyjson.com/${api}`);
        let json = await result.json();
        return json;
    },[api]);
      
} 
*/
