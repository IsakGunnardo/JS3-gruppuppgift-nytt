import { Link } from "react-router-dom";
import "./main.css";
export function Main({ posts, users }) {
  if (Object.keys(users).length === 0) {
    return (
      <div>
        <p>User data is not available.</p>
      </div>
    );
  } else {
    return (
      <main className="main">
        <ul>
          {posts.map((holder, index) => (
            <li key={index} style={{ borderBottom: "1px solid black" }}>
              <h3>Title: {holder.title}</h3>
              <main>{holder.body}</main>
              <h4>
                Creator: {users[index].firstName} {users[index].lastName}
              </h4>
              <img src={users[index].image} width={25} height={25} />
              <Link
                to={`/post/${holder.id}/${users[index].firstName}/${users[index].lastName}`}
              >
                Read More
              </Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
