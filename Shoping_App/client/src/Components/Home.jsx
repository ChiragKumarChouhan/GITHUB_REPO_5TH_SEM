import React from "react";
import Item from "./Item";
import "./Home.css";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="items-container">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Outlet />
    </div>
  );
}

export default Home;
