import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOnePosts } from "../api/fetch";
import { getAllComments } from "../api/fetch";
import { AsideLeft } from "../components/asideleft";
import { AsideRight } from "../components/asideright";
import { RecoilRoot, useRecoilState } from "recoil";
import { postState, allDatasState, commentState } from "../states/atoms";
import "./pages.css";
import { AddComment } from "../components/commetsAdd";
import { ArrowFatDown, ArrowFatUp } from "@phosphor-icons/react";

// kvar o göra är att fixa så reaktionerna uppdateras i allData
//Fetchar en post om det inte är en egenskapad "post", och visar sedan en single post
export function OnePost() {
  const { id, firstName, lastName, index } = useParams();
  const [onePost, setOnePost] = useState({});
  const [allComments, setAllComments] = useRecoilState(commentState);
  const [likeCommentBoolean,setLikeCommentBoolean] = useState(false);
  /* const [allComments, setAllComments] = useState([]); */
  const [likes, setLikes] = useState(0);
  const [likeComment, setLikeComment] = useState(4);
  const [likeBoolean,setLikeBoolean] = useState(false);
  const [allData, setAllData] = useRecoilState(allDatasState);
  const [isClicked, setIsClicked] = useState(false);

  const handelClick = () => {
    setIsClicked(true)
  }

  useEffect(() => {
    if (id != 151) {
      getOnePosts({ id }).then((result) => setOnePost(result));
    }
  }, [id]);

  /////////////////////////UseEffect körs redan i App.js så behövs ej här
  /*  useEffect(() => {
    getAllComments().then((result) =>
      setAllComments(result.comments, ...allComments)
    );
    console.log(allComments);
  }, []); */

  useEffect(() => {
    if (onePost.reactions !== undefined) {
      setLikes(onePost.reactions);
    }
  }, [onePost]);

  const increase = () => {
    if(likeBoolean == false){ 
      setLikes((like) => like + 1)
      setLikeBoolean(!likeBoolean)
  } else {
    setLikes((like) => like - 1)
    setLikeBoolean(!likeBoolean)
  }
   
  };

  const decrease = () => {
    if(likeBoolean == false){ 
      setLikes((like) => like - 1)
      setLikeBoolean(!likeBoolean)
  } else {
    setLikes((like) => like + 1)
    setLikeBoolean(!likeBoolean)
  }
   
  };

  const increaseComment = () => {
    if(likeCommentBoolean == false){ 
      setLikeComment((like) => like + 1)
      setLikeCommentBoolean(!likeCommentBoolean)
  } else {
    setLikeComment((like) => like - 1)
    setLikeCommentBoolean(!likeCommentBoolean)
  }
  };

  const decreaseComment = () => {
    if(likeCommentBoolean == false){ 
      setLikeComment((like) => like - 1)
      setLikeCommentBoolean(!likeCommentBoolean)
  } else {
    setLikeComment((like) => like + 1)
    setLikeCommentBoolean(!likeCommentBoolean)
  }
  }; 
 
  if (id == 151) {
    return (
      <>
        <div className="Post-container">
          <div className="Mid-Post-container">
            <li style={{ borderBottom: "1px solid black" }}>
              <h4>by {firstName + " " + lastName}</h4>

              <h1>Title: {allData[index]?.title}</h1>
              <main>Body: {allData[index]?.body}</main>

              <div className="Reaction-container">
                <button onClick={increase}>
                  <ArrowFatUp size={30} />
                </button>
                <span>{likes}</span>
                <button onClick={decrease}>
                  <ArrowFatDown size={30} />
                </button>
              </div>
              <h4>
                Tags:{" "}
                {Array.isArray(allData[index]?.tags)
                  ? allData[index].tags.map((tag) => tag + " / ")
                  : "No tags available"}
              </h4>
            </li>

            <AddComment />
            <ul>
              {allComments.map((comment, index) => (
                <li key={index} className="Comment-container">
                  <h4 style={{ fontWeight: "1200", fontSize: "larger" }}>
                    User: {comment.user?.username}
                  </h4>
                  <h5>Comment: {comment.body}</h5>
                  <div className="Reaction-container">
                    <button onClick={increaseComment}>
                      <ArrowFatUp size={25} />
                    </button>
                    <span>{likeComment}</span>
                    <button onClick={decreaseComment}>
                      <ArrowFatDown size={25} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="Post-container">
          <div className="Mid-Post-container">
            <li style={{ borderBottom: "1px solid black" }}>
              <h4>by {firstName + " " + lastName}</h4>
              <h1>{onePost.title}</h1>
              <main>{onePost.body}</main>

              <div className="Reaction-container">
                <button className={`like-btn-positive ${isClicked ? 'grow-btn' : ''}`} 
                  onClick={() => {
                    increase();
                    handelClick();
                  }}
                >                  
                  <ArrowFatUp size={30} style={{color: "green"}}/>                  
                </button>
                <span>{likes}</span>
                <button className={`like-btn-negative ${isClicked ? 'grow-btn' : ''}`} 
                  onClick={() => {
                    decrease();
                    handelClick();
                  }}                  
                >
                  <ArrowFatDown size={30} style={{color: "red"}}/>                
                </button>
              </div>
              <h4>
                Tags:{" "}
                {Array.isArray(onePost.tags)
                  ? onePost.tags.map((tag) => tag + " / ")
                  : "No tags available"}
              </h4>
            </li>

            <AddComment />
            <ul>
              {allComments.map((comment, index) => (
                <li key={index} className="Comment-container">
                  <h4 style={{ fontWeight: "1200", fontSize: "larger" }}>
                    User: {comment && comment.user?.username}
                  </h4>
                  <h5>Comment: {comment && comment.body}</h5>
                  <div className="Reaction-container">
                    <button onClick={increaseComment}>
                      <ArrowFatUp size={25} />
                    </button>
                    <span>{likeComment}</span>
                    <button onClick={decreaseComment}>
                      <ArrowFatDown size={25} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

//ändrat 121  <h5>Comment: {comment.body}</h5>
// rad 76 ligger en "?"
