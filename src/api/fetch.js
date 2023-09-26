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

export async function fetchAPost(title, body, id, firstName, lastName) {
  let result = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Id: id,
      title: title,
      body: body,
      userId: id,
      firstName: firstName,
      lastName: lastName,
     
    }),
  });
  let json = await result.json();
  return json;
}

export async function addAComment( body, name, id) {
  let result = await fetch("https://dummyjson.com/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 151,
      body: body,     
      postId: 62,
      userId: id,
      userUsername: name,
    }),
  });
  let json = await result.json();
  return json;
}
/*

fetch('https://dummyjson.com/comments/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    body: 'This makes all sense to me!',
    postId: 3,
    userId: 5,
    username: 
  })
})
.then(res => res.json())
.then(console.log);
            



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
