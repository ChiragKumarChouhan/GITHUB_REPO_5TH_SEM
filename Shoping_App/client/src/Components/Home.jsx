import React from "react";
import Item from "./Item";
import "./Home.css";

function Home() {
  return (
    <div className="items-container">
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default Home;
