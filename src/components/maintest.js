import { Link } from "react-router-dom";
import "./main.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { postState, userState } from "../states/atoms";
import React from "react";

export function Main() {

  const [users, setUser] = useRecoilState(userState);
  const [posting, setPosting] = useRecoilState(postState);

  if (Object.keys(users).length === 0) {
    return (
      <div>
        <p>User data is not available.</p>
      </div>
    );
  } else {
    return (
      <main className="main">
            <Link to="/addnewpost" ><button style={{marginLeft:"2%"}}className="add-btn">Create Post</button></Link>

        <ul></ul>
        <ul>
          {posting.map((holder, index) => (
            <li key={index} style={{ borderBottom: "1px solid black" }}>
              <h3>Title: {holder.title}</h3>
              <main>{holder.body}</main>


              {users[index] &&  (
                <img src={users[index]?.image} width={25} height={25} />
              )}              
              
              <h4>
                Creator: {users[index]?.firstName} {users[index]?.lastName}
              </h4>                          
            
              <Link 
                to={`/post/${holder.id}/${users[index]?.firstName}/${users[index]?.lastName}`}
                style={{color: "black"}} className="hover-link">
                Read More
            </Link>

            </li>
          ))}
        </ul>
      </main>
    );
  }
}

/*

import { Link } from "react-router-dom";
import "./main.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { postState, userState } from "../states/atoms";
import React from "react";

export function Main() {

  const [users, setUser] = useRecoilState(userState);
  const [posting, setPosting] = useRecoilState(postState);

  if (Object.keys(users).length === 0) {
    return (
      <div>
        <p>User data is not available.</p>
      </div>
    );
  } else {
    return (
      <main className="main">
            <Link to="/addnewpost" ><button style={{marginLeft:"2%"}}className="add-btn">Create Post</button></Link>

        <ul></ul>
        <ul>
          {posting.map((holder, index) => (
            <li key={index} style={{ borderBottom: "1px solid black" }}>
              <h3>Title: {holder.title}</h3>
              <main>{holder.body}</main>
              <h4>
                Creator: {users[index].firstName} {users[index].lastName}
              </h4>
              <img src={users[index].image} width={25} height={25} />
            <Link
                to={`/post/${holder.id}/${users[index].firstName}/${users[index].lastName}`}
              style={{color: "black"}} className="hover-link">
                Read More
          </Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
*/

