import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isWhite, setIsWhite] = useState(false);
  const appClass = isWhite ? "App dark" : "App light";
  const handleClick = () => {
    setIsWhite((prev) => !prev);
  };
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isWhite ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
