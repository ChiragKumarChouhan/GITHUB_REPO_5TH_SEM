import React from "react";
import "./Item.css";
import productImage from "../assets/hero.png";

function Item() {
  return (
    <div className="card">
      <img
        src={productImage}
        width={180}
        height={180}
        alt="React JS product"
      />

      <h2>Title: Reactjs</h2>

      <h3>Price: ₹365</h3>

      <button>Add to Cart</button>
    </div>
  );
}

export default Item;
