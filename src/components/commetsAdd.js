
import { commentState } from '../states/atoms';
import {useRecoilState} from 'recoil'
import { addAComment } from '../api/fetch';
import {useState} from 'react'


export function AddComment(){
  const [allComments, setAllComments] = useRecoilState(commentState);
  const [input, setInput] = useState({user: "", body:""})

  const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });  
    
  
  }
   const randomId= Math.random()
  const handelClick= (e) => {
    e.preventDefault()
    
    addAComment(randomId, input.body ,input.user).then((input) =>
    setAllComments([input, ...allComments])
    
  );
   console.log(allComments)

  }
  
  return (
    <div>      
      <input
            placeholder="Username"
            name="user"
            value={input.user}
            onChange={handelChange}
          />
          <textarea
          className='comment-container'
          name='body'
          value={input.body}
          onChange={handelChange}
          />
          <button 
            className='comment-btn'
            onClick={handelClick}>
            Add a Comment
          </button>
    </div>
  )
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