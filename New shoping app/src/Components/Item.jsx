import React from "react";

function Item({ title, price }) {
  return (
    <div className="item">
      <img
        src="https://via.placeholder.com/100"
        width={100}
        height={100}
        alt="Item"
      />

      <h2>Title: {title}</h2>
      <h2>Price: ₹{price}</h2>

      <button>Add to Cart</button>
    </div>
  );
}

export default Item;
