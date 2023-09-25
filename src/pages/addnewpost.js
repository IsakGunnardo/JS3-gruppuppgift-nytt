import React, { useEffect } from "react";
import style from "./pages.css";

import { useRecoilState } from "recoil";
import { addNewPost, userState, allDatasState } from "../states/atoms";
import { fetchAPost } from "../api/fetch";
import {
  Article,
  ImageSquare,
  Link,
  TextStrikethrough,
  CodeSimple,
} from "@phosphor-icons/react";

//15/9 input och textarea funkar och sparar värdet i input. Det går att få informationen genom api:et ut i en console.log när man klickar på post knappen .
// KVAR ATT GÖRA HÄR:
//få ut username och img med vare post på samma sätt som i main

//knappfunktionalitet
export function AddNewPost() {
  const [users, setUser] = useRecoilState(userState);
  const [input, setInput] = useRecoilState(addNewPost);
  const [allData, setAllData] = useRecoilState(allDatasState);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //Denna hittar firstname,lastname samt image --> läggs till i input objekt
  const findFirstName = () => {
    const firstName = users[input.id - 1]?.firstName;
    const lastName = users[input.id - 1]?.lastName;
    const img = users[input.id - 1]?.image;
    return [firstName, lastName, img];
  };

  //Postar samt fetchar AddPost via dummy, lägger sedan till det som saknas via findFirstName funktionen
  const handelClick = () => {
    fetchAPost(
      input.title,
      input.text,
      input.id,
      input.firstName,
      input.lastName,
      input.reactions
    )
      .then((input) => {
        const [first, secondName, img] = findFirstName();
        input.firstName = first;
        input.lastName = secondName;
        input.image = img;
        input.reactions = 0;
        return input;
      })
      .then((newInput) => {
        setAllData([newInput, ...allData]);
      });
  };

  //denna tar enbart id till input
  function PeopleList({ users }) {
    return (
      <select name="id" value={input.id} onChange={handleChange}>
        <option>Choose a user:</option>
        {users.map((person) => (
          <option key={person.id} value={person.id}>
            {person.firstName} {person.lastName}
          </option>
        ))}
      </select>
    );
  }

  useEffect(() => {
    console.log(allData);
  }, [allData]);

  return (
    <>
      <section className="add-post-section">
        <div className="new-post-users">
          <PeopleList users={users} />
        </div>
        <div className="new-post-img-btn">
          <button className="choose-post-btn">
            <Article size={25} />
            Post
          </button>
          <button className="choose-post-btn">
            <ImageSquare size={25} />
            Image & video
          </button>
          <button className="choose-post-btn">
            <Link size={25} />
            Link
          </button>
          <button className="choose-post-btn ">
            <Article size={25} />
            Poll
          </button>
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
          <button>
            <Link />
          </button>
          <button>
            <TextStrikethrough />
          </button>
          <button>
            <CodeSimple />
          </button>
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
