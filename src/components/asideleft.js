import "./aside.css";
import { useState } from "react";

export function AsideLeft() {
  const [toggleState, setToggleState] = useState({
    game: true,
    sport: true,
    business: true,
    crypto: true,
    television: true,
    celebrity: true,
    resources: false,
    topic: false,
  });

  const handleClick = (section) => {
    setToggleState({
      ...toggleState,
      [section]: !toggleState[section],
    });
  };


  function Button({title,title1,title2,title3,title4,title5,title6,title7}){
    return(
           <>
        <button style={{border: "none", backgroundColor: "transparent", display: "flex", justifyContent: "space-between" }}onClick={() => handleClick("topic")}><span>{title}</span><i className={`arrow ${toggleState.topic ? "down" : "up"}`}/></button>
         <div style={{ display: toggleState.topic ? "none" : "block" }}>
         <span>{title1}</span>
         <span>{title2}</span>
         <span>{title3}</span>
         <span>{title4}</span>
         <span>{title5}</span>
         <span>{title6}</span>
         <span>{title7}</span>

  </div>
         </>
    )
  }
  return (
    <aside className="sidebar-left">
      <section>
        <ul className="sidebar-left-ul">
          <li>Popular</li>
        </ul>
      </section>
      <section
        style={{
          minHeight: "auto",
          borderBottom: "1px solid black",
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
        }}
      >



        <h5></h5>
        <div
          style={{ marginLeft: "20px" , marginBottom: "10px", marginRight: "20px"}}
          onClick={() => handleClick("topic")}
        >
          <span>TOPICS</span>
          <span style={{float: "right"}}>
            <i
              style={{ marginLeft: "30%" }}
              className={`arrow ${toggleState.topic ? "down" : "up"}`}
            />
          </span>
        </div>
        <div style={{ display: toggleState.topic ? "none" : "block" }}>
          <div
            style={{
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <span>Gaming</span>
            <span >
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.game ? "down" : "up"}`}
              />
            </span>
          </div>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              listStyle: "none",
              display: toggleState.game ? "none" : "block",
            }}
          >
            <li> Valheim </li>
            <li> Ganshin Impact </li>
            <li> Minecraft </li>
            <li> Halo Infinite </li>
            <li> Call of Duty: Warzone </li>
            <li>Path of Exile</li>
            <li>Hollow Knight: SilkSong</li>
            <li>Escape from Tarkov</li>
            <li>Watch Dogs: Legion</li>
          </ul>

          <div
            style={{
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            onClick={() => handleClick("sport")}
          >
            <span>Sport</span>
            <span>
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.sport ? "down" : "up"}`}
              />
            </span>
          </div>
          <ul
            className="sidebar-ul-toggle"
            style={{ display: toggleState.sport ? "none" : "block" }}
          >
            <li>NFL</li>
            <li>NBA</li>
            <li>Megan Anderson</li>
            <li>Atlanta Hawks</li>
            <li>Los Angeles Lakers</li>
            <li>Boston Celtic</li>
            <li>Arsenal F.C.</li>
            <li>Philadelphia 76ers</li>
            <li>Premier League</li>
            <li>UFC</li>
          </ul>

          <div
            style={{
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            onClick={() => handleClick("business")}
          >
            <span>Business</span>
            <span>
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.business ? "down" : "up"}`}
              />
            </span>
          </div>
          <ul
            className="sidebar-ul-toggle"
            style={{ display: toggleState.business ? "none" : "block" }}
          >
            <li>GameStop</li>
            <li>blabla</li>
            <li>blabla</li>
            <li>blabla</li>
            <li>blabla</li>
            <li>blabla</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div
            style={{
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            onClick={() => handleClick("crypto")}
          >
            <span>Crypto</span>
            <span>
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.crypto ? "down" : "up"}`}
              />
            </span>
          </div>
          <ul
            className="sidebar-ul-toggle"
            style={{ display: toggleState.crypto ? "none" : "block" }}
          >
            <li>NFL</li>
            <li>NBA</li>
            <li>Megan Anderson</li>
            <li>Atlanta Hawks</li>
            <li>Los Angeles Lakers</li>
            <li>Boston Celtic</li>
            <li>Arsenal F.C.</li>
            <li>Philadelphia 76ers</li>
            <li>Premier League</li>
            <li>UFC</li>
          </ul>
          <div
            style={{
              textAlign: "start",
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            onClick={() => handleClick("television")}
          >
            <span>Television</span>
            <span>
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.television ? "down" : "up"}`}
              />
            </span>
          </div>
          <ul
            className="sidebar-ul-toggle"
            style={{ display: toggleState.television ? "none" : "block" }}
          >
            <li>NFL</li>
            <li>NBA</li>
            <li>Megan Anderson</li>
            <li>Atlanta Hawks</li>
            <li>Los Angeles Lakers</li>
            <li>Boston Celtic</li>
            <li>Arsenal F.C.</li>
            <li>Philadelphia 76ers</li>
            <li>Premier League</li>
            <li>UFC</li>
          </ul>

          <div
            style={{
              width: "50px",
              marginLeft: "40px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
            onClick={() => handleClick("celebrity")}
          >
            <span>Celebrity</span>
            <span>
              <i
                style={{ marginLeft: "30%" }}
                className={`arrow ${toggleState.celebrity ? "down" : "up"}`}
              />
            </span>
          </div>
          <ul
            className="sidebar-ul-toggle"
            style={{ display: toggleState.celebrity ? "none" : "block" }}
          >
            <li>NFL</li>
            <li>NBA</li>
            <li>Megan Anderson</li>
            <li>Atlanta Hawks</li>
            <li>Los Angeles Lakers</li>
            <li>Boston Celtic</li>
            <li>Arsenal F.C.</li>
            <li>Philadelphia 76ers</li>
            <li>Premier League</li>
            <li>UFC</li>
          </ul>
        </div>
        <button
          style={{ width: "50px", marginLeft: "20px", marginBottom: "20px" }}
          className="sidebar-left-button"
        >
          See more
        </button>
      </section>
      <section style={{ minHeight: "30%", position: "static" }}>
        <div
          style={{ marginLeft: "20px" }}
          onClick={() => handleClick("resources")}
        >
          <span>RESOURCES</span>
          <span style={{float: "right"}}>
            <i
              style={{ marginLeft: "30%" }}
              className={`arrow ${toggleState.resources ? "down" : "up"}`}
            />
          </span>
        </div>

        <ul
          className="sidebar-left-ul"
          style={{ display: toggleState.resources ? "none" : "block" }}
        >
          <li>About Reddit</li>
          <li>Advertise</li>
          <li>Help</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Press</li>

          <button className="sidebar-left-button">See more</button>
        </ul>
      </section>
      <p className="sidebar-left-p">
        Reddit, inc. © 2023. All rights reserved.
      </p>
    </aside>
  );
}
