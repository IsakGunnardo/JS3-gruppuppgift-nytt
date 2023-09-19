import React from "react";
import "./pages.css";
import { AsideLeft } from "../components/asideleft";
import { AsideRight } from "../components/asideright";
import { Main } from "../components/main";

import { useRecoilState } from "recoil";
import { postState, userState, commentState } from "../states/atoms";

export function Home({posts, users}) {
  return (
    <div className="Home-container">

      <Main posts={posts} users={users} />

    </div>
  );
}
