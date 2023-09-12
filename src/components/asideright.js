import "./aside.css";
import { Link } from "react-router-dom";

export function AsideRight() {
  return (
    <>
      <aside className="sidebar-right">
        <div>
          <h2 className="sidebar-right-h2">POPULAR COMMUNITIES</h2>
          <ul>
            <li>
              <a href="https://www.reddit.com/r/Minecraft/">r/Minecraft</a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/Minecraft/">r/Minecraft</a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/Minecraft/">r/Minecraft</a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/Minecraft/">r/Minecraft</a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/Minecraft/">r/Minecraft</a>
            </li>
          </ul>
          <button className="aside-right-btn">See more</button>
        </div>
        <ul>
            <li>
              <Link to="/">Home</Link>
              
            </li>
            <li>
            <Link to="/post">Post</Link>
            </li>
            <li>
            <Link to="/addpost">Add Post</Link>
            </li>
           
          </ul>
      </aside>
    </>
  );
}
