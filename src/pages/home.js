import React from "react";
import "./pages.css";
import { AsideLeft } from "../components/asideleft";
import { AsideRight } from "../components/asideright";
import { Main } from "../components/main";

import { useRecoilState } from "recoil";
import { postState, userState, commentState } from "../states/atoms";

export function Home(props) {
  return (
    <div className="Home-container">
      <AsideLeft />
      <Main posts={props.posts} users={props.users} />
      <AsideRight />
    </div>
  );
}
