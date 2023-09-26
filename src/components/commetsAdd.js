import { commentState, userState } from "../states/atoms";
import { useRecoilState } from "recoil";
import { addAComment } from "../api/fetch";
import { useState } from "react";

//eftersom att det redan är förbestämt i API:ett vilka users som finns går det inte att skapa nya users som
// jag förtår det utan man får göra som i post och rendera ut dom användare som finns och välja i listan.
export function AddComment() {
  const [allComments, setAllComments] = useRecoilState(commentState);
  const [users, setUsers] = useRecoilState(userState);
  const [input, setInput] = useState({ user: "", id: "", body: "" });

  const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  function PeopleList() {
    return (
      <select name="id" value={input.id} onChange={handelChange}>
        <option>Choose a user:</option>
        {users.map((person) => (
          <option key={Math.random()} value={person.id}>
            {person.username}
          </option>
        ))}
      </select>
    );
  }
  const handelClick = (e) => {
    e.preventDefault();

    addAComment(input.body, input.user, input.id).then((input) =>
      setAllComments([input, ...allComments])
    );
    setInput(() => ({ body: "" }));
  };

  return (
    <div>
      <PeopleList />
      <textarea
        className="comment-container"
        name="body"
        value={input.body}
        onChange={handelChange}
      />
      <button className="comment-btn" onClick={handelClick}>
        Add a Comment
      </button>
    </div>
  );
}

/*
import { userState } from '../states/atoms';
import {useRecoilState} from 'recoil';
import { useState } from 'react';
import { addNewPost } from '../states/atoms';

//skapa en sida utan asides med en titel en textaria

 
export function AddPost() {
    
   const [users, setUser] = useRecoilState(userState);

   const [newPost,setNewPost] = useRecoilState(addNewPost);
   
  
   const handelChange = event => {
    const { name, value } = event.target;
    setNewPost((newPost) => ({...newPost, [name]: value}))
    console.log(newPost)
    
  }
  


  //------------------ render users -------------------------------------------
  function PeopleList({ users }) {
    return (
      <select>
        {users.map((person, index) => (
          <option value={person} key={index}>{person.firstName}</option>
        ))}
      </select>
    );
  }

  return (
    <section className="add-post-section">
    
      <label for="usernames">Choose a user:</label>
      <PeopleList users={users}/>
      
      <div>
        <button>Post</button>
        <button>image & video</button>
        <button>Link</button>
        <button>Poll</button>
      </div>
     
      <input 
      placeholder="Title" 
      name='title'
      value={newPost.title}
      onChange={handelChange}
      
      />
      <div>
        <button>B</button>
        <button>i</button>
        <button>Q</button>
        <button>S</button>
        <button>C</button>
        <span>markdown mode</span>
      </div>

      <textarea 
        placeholder="Text(optional) Max 60 tecken" 
        name='text'
        value={newPost.text}
        onChange={handelChange}
       
       
      />
      <button>Save Draft</button>
      <button >Post</button>
      <input type="checkbox"
      />
      <label>Send me post reply notifications</label>
     
    </section>
  )
}

*/
