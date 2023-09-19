import React from "react";
import style from "./pages.css";

import { useRecoilState } from "recoil";
import { addNewPost, userState, postState } from "../states/atoms";
import { fetchAPost } from "../api/fetch";

//15/9 input och textarea funkar och sparar värdet i input. Det går att få informationen genom api:et ut i en console.log när man klickar på post knappen .
// KVAR ATT GÖRA HÄR:
//få ut username och img med vare post på samma sätt som i main
//all styling
//knappfunktionalitet
export function AddNewPost() {
  const [users, setUser] = useRecoilState(userState);
  const [input, setInput] = useRecoilState(addNewPost);
  const [post, setPost] = useRecoilState(postState);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const userInformation = (()=> {})

  const handelClick = () => {
    fetchAPost(input.title, input.text, input.id).then((input) =>
      setPost([input, ...post])
    );
    console.log(post);
  };

  function PeopleList({ users }) {
    return (
      <select name="id" value={input.id} onChange={handleChange}>
        {users.map((person) => (
          <option key={person.id} value={person.id}>
            {person.firstName}
          </option>
        ))}
      </select>
    );
  }
  return (
    <>
      <section className="add-post-section">
        <div className="new-post-users">
          <label htmlFor="usernames">Choose a user:</label>

          <PeopleList users={users} />
        </div>
        <div className="new-post-title">
          <input
            placeholder="Title"
            name="title"
            value={input.title}
            onChange={handleChange}
          />
        </div>

        <div className="new-post-style-btn">
          <button>B</button>
          <button>i</button>
          <button>Q</button>
          <button>S</button>
          <button>C</button>
          <span>markdown mode</span>
        </div>
        <div className="new-post-textarea">
          <textarea
            placeholder="Text(optional) Max 60 tecken"
            name="text"
            value={input.text}
            onChange={handleChange}
          />
        </div>
        <div className="new-post-save-btn">
          <button>Save Draft</button>
          <button onClick={handelClick}>Post</button>
        </div>
        <div className="new-post-checkbox">
          
          <input type="checkbox" />
          <label>Send me post reply notifications</label>
        </div>
      </section>
    </>
  );
}
