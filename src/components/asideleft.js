import "./aside.css";
import { useState } from "react";

export function AsideLeft() {
  const [toggleGame, setToggleGame] = useState(true);
  const [toggleSport, setToggleSport] = useState(true);
  const [toggleBusiness, setToggleBusiness] = useState(true);
  const handleClickGame = () => {
    setToggleGame(!toggleGame);
  };
  const handleClickSport = () => {
    setToggleSport(!toggleSport);
  };
  const handleClickBusiness = () => {
    setToggleBusiness(!toggleBusiness);
  };

  return (
    <aside className="sidebar-left">
      <section>
        <ul className="sidebar-left-ul">
          <li>Popular</li>
        </ul>
      </section>
      <section>
        <h6>TOPICS</h6>

        <ul className="sidebar-left-ul">
          <li onClick={handleClickGame}>
            {" "}
            Gaming <i className="arrow down" />
            <ul
              className="sidebar-ul-toggle ul-in-ul"
              style={{ display: toggleGame ? "none" : "block" }}
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
          </li>
          <li onClick={handleClickSport}>
            Sport <i className="arrow down" />
            <ul
              className="sidebar-ul-toggle"
              style={{ display: toggleSport ? "none" : "block" }}
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
          </li>
          <li onClick={handleClickBusiness}>
            Business <i className="arrow down" />
            <ul
              className="sidebar-ul-toggle"
              style={{ display: toggleSport ? "none" : "block" }}
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
          </li>
          <li>
            Crypto
            <ul className="sidebar-ul-toggle"></ul>
          </li>
          <li>
            Television
            <ul className="sidebar-ul-toggle"></ul>
          </li>
          <li>
            Celebrity
            <ul className="sidebar-ul-toggle"></ul>
          </li>
          <button className="sidebar-left-button">See more</button>
        </ul>
      </section>
      <footer>
        <h6>RESOURCES</h6>

        <ul className="sidebar-left-ul">
          <li>About Reddit</li>
          <li>Advertise</li>
          <li>Help</li>
          <button className="sidebar-left-button">See more</button>

          <p className="sidebar-left-p">
            Reddit, inc. © 2023. All rights reserved.
          </p>
        </ul>
      </footer>
    </aside>
  );
}
