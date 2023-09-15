import React from "react";

import { useRecoilState } from "recoil";
import { addNewPost, userState, postState } from "../states/atoms";
import { fetchAPost } from "../api/fetch";

//15/9 input och textarea funkar och sparar värdet i input. Det går att få informationen genom api:et ut i en console.log när man klickar på post knappen .
// KVAR ATT GÖRA HÄR:
// få user name och ev ID att sparas i inputstatet. 
// rendera ut posten högst upp i main flödet genom att lägga in addNewPost i postState listan. 
//all styling 
//knappfunktionalitet 
export function AddNewPost(props) {
  const [users, setUser] = useRecoilState(userState);
  const [input, setInput] = useRecoilState(addNewPost);
  const [post, setPost] = useRecoilState(postState)

const handleChange = (e) => {
  setInput({ ...input, [e.target.name]: e.target.value });
};

const handelClick= ()=> {
  fetchAPost().then(console.log(input.title, input.text,3));
  setInput({ title: "",text: ""}
  )
}

function PeopleList({ users }) {
  return (
    
      users.map((person, index) => (
        <option value={person} key={index}>{person.firstName}</option>
      ))
   
  );
}
 return (
  <>
   <section className="add-post-section">
   
   <label htmlFor="usernames">Choose a user:</label>
   <select
    
   >
    <PeopleList users={users}/>
    </select>
     
      
     <input 
    
     placeholder="Title" 
     name='title'
     value={input.title}
     onChange={handleChange}
     
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
       value={input.text}
       onChange={handleChange}
      
      
     />
     <button>Save Draft</button>
     <button onClick={handelClick} >Post</button>
     <input type="checkbox"
     
      
     />
     <label>Send me post reply notifications</label>
    
   </section>
  
   
   </>
 )
}