export async function getAllPosts() {
    let result = await fetch("https://dummyjson.com/posts");
    let json = await result.json();
    return json;
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

//används ej än är till post.js
export async function getOnePosts({ onepost }) {
    let result = await fetch(`https://dummyjson.com/posts/${onepost}`);
    let json = await result.json();
    return json;
}
//används ej än är till addpost.js
export function addAPost() {
    
fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
      userId: 1,
    })
  })
  .then(res => res.json())
  .then(console.log);
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