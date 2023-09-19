import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOnePosts } from "../api/fetch";
import { getAllComments } from "../api/fetch";
import { AsideLeft } from "../components/asideleft";
import { AsideRight } from "../components/asideright";
import "./pages.css";

export function OnePost() {
  const { id, firstName, lastName } = useParams();
  const [onePost, setOnePost] = useState({});
  const [allComments, setAllComments] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    getOnePosts({ id }).then((result) => setOnePost(result));
  }, [id]);

  useEffect(() => {
    getAllComments().then((result) => setAllComments(result.comments));
  }, []);

  useEffect(() => {
    setLikes(onePost.reactions);
  }, [onePost]);

  const increase = () => {
    setLikes((like) => like + 1);
  };

  const decrease = () => {
    setLikes((like) => like - 1);
  };

  return (
    <>
      <div className="Post-container">
        <AsideLeft />
        <div className="Mid-Post-container">
          <li style={{ borderBottom: "1px solid black" }}>
            <h4>by {firstName + " " + lastName}</h4>
            <h1>{onePost.title}</h1>
            <main>{onePost.body}</main>

            <div className="Reaction-container">
              <button onClick={increase}>↑</button>
              <span>{likes}</span>
              <button onClick={decrease}>↓</button>
            </div>
            <h4>
              Tags:{" "}
              {Array.isArray(onePost.tags)
                ? onePost.tags.map((tag) => tag + " / ")
                : "No tags available"}
            </h4>
          </li>
          <button className="big-btn">
            <span>
              <span className="plus-icon">+</span>
              <span>Add a comment</span>
            </span>
          </button>
          <ul>
            {allComments.map((comment, index) => (
              <li key={index} className="Comment-container">
                <h4 style={{ fontWeight: "1200", fontSize: "larger" }}>
                  User: {comment.user.username}
                </h4>
                <h5>Comment: {comment.body}</h5>
              </li>
            ))}
          </ul>
        </div>
        <AsideRight /> {/*Byt ut denna (?)*/}
      </div>
    </>
  );
}
