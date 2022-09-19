import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const handleClick = () => {
    setInCart((prev) => !prev);
  };

  const liClass = inCart ? "in-cart" : "";
  const btnClass = inCart ? "remove" : "add";
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleClick}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
