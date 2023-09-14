import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOnePosts } from "../api/fetch";
import { getAllComments } from "../api/fetch";

export function OnePost() {
  const { id, firstName, lastName } = useParams();
  const [onePost, setOnePost] = useState({});
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    getOnePosts({ id }).then((result) => setOnePost(result));
  }, [id]);

  useEffect(() => {
    getAllComments().then((result) => setAllComments(result.comments));
  }, []);
  console.log(allComments);

  return (
    <>
      <li style={{ borderBottom: "1px solid black" }}>
        <h3>Title: {onePost.title}</h3>
        <main>{onePost.body}</main>

        <h4>Creator: {firstName + " " + lastName}</h4>
        <h4>Reactions: {onePost.reactions}</h4>
        <h4>
          Tags:{" "}
          {Array.isArray(onePost.tags)
            ? onePost.tags.map((tag) => tag + " / ")
            : "No tags available"}
        </h4>
      </li>
      <h3>Comments: </h3>
      <ul>
        {allComments.map((comment, index) => (
          <li key={index}>
            <h4>User: {comment.user.username}</h4>
            <h5>Comment: {comment.body}</h5>
          </li>
        ))}
      </ul>
    </>
  );
}
