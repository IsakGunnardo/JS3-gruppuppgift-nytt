import { userState } from '../states/atoms';
import {useRecoilState} from 'recoil';
import { useState } from 'react';
//skapa en sida utan asides med en titel en textaria
//rendera ut users i en scroll lista
//creat a user list from API users
//
//problem med att få globala state att fungera i denna fil, behövs för att rendera ut userlist. 
export function AddPost() {
    
   const [users, setUser] = useRecoilState(userState);

   const [input,setInput] = useState({title: "", text:"" });
   const [newPost, setNewPost] = useState([])

  const handelChange = e => {
    const [name,value] = e.target;
    setInput(() => {

    })
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

      <input placeholder="Title" 
      />
      <div>
        <button>B</button>
        <button>i</button>
        <button>Q</button>
        <button>S</button>
        <button>C</button>
        <span>markdown mode</span>
      </div>

      <textarea placeholder="Text(optional) Max 60 tecken" 
      />
      <button>Save Draft</button>
      <button >Post</button>
      <input type="checkbox"
      />
      <label>Send me post reply notifications</label>
     
    </section>
  )
}
