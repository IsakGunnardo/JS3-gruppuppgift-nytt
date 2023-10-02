import { Link } from "react-router-dom";
import "./main.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { userState, allDatasState, searchBarState } from "../states/atoms";
import { FilterItem } from "../utils/filterlist";
import React from "react";

export function Main() {
  const [searchBar,setSearchBar] = useRecoilState(searchBarState);
  const [users, setUser] = useRecoilState(userState);
  const [allData, setAllData] = useRecoilState(allDatasState);

  const filterData = FilterItem(searchBar,allData)
  console.log(allData)
  if (Object.keys(allData).length === 0) {
    return (
      <div>
        <p>User data is not available.</p>
      </div>
    );
  } else {
    return (
      <main className="main">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/addnewpost">
            <input
              placeholder="Create Post"
              style={{ marginLeft: "5%" }}
              className="add-btn"
            />
            {/* <button style={{ marginLeft: "2%" }} className="add-btn">
            Create Post
          </button> */}
          </Link>
          <div style={{display: "flex", gap: "2rem", marginRight: "5px"}}>
            <span className="btn-right">
              <p>Hot</p>
              <i className="arrow down"></i>
            </span>
            <span className="btn-right">
              <p>Sweden</p>
              <i className="arrow down"></i>
            </span>
            <span className="btn-right">
              <p>gridbild</p>
              <i className="arrow down"></i>
            </span>
          </div>
        </div>
        <ul></ul>
        <ul>
          {filterData.map((holder, index) => {
            let idIsInvalid = 0;
            if (holder.id === 151) {
              idIsInvalid = holder.userId;
            } else {
              idIsInvalid = holder.id;
            }
            return (
              //kan vara bra att importera UUID - för att skapa unika keys (nu får ingen body se likadan ut) // nu funkar det, lösning key{math.random()} så det blir unika nycklar för postsen
              <li
                key={Math.random()}
                style={{ borderBottom: "1px solid black" }}
              >
                <h3>Title: {holder.title}</h3>
                <main>{holder.body}</main>

                {holder && <img src={holder.image} width={25} height={25} />}

                <h4>
                  Creator: {holder.firstName} {holder.lastName}
                </h4>
                <h5>
                  Tags:{" "}
                  {Array.isArray(filterData[index]?.tags)
                    ? filterData[index].tags.map((tag) => tag + " / ")
                    : "No tags "}
                </h5>

                <Link
                  to={`/post/${holder.id}/${filterData[index]?.firstName}/${filterData[index]?.lastName}/${index}`}
                  style={{ color: "black" }}
                  className="hover-link"
                >
                  Read More
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
