import { useState } from "react";

const options = ["patty", "lettuce", "tomato", "pickles"];

export default function ItemO() {
  const [burger, setBurger] = useState([]);

  const addItem = ({ target }) => {
    const clickedTopping = target.value;
    setBurger((prev) => {
      if (prev.includes(clickedTopping)) {
        return [...prev];
      } else {
        return [clickedTopping, ...prev];
      }
    });
  };

  const removeItem = ({ target }) => {
    const clickedTopping = target.value;
    setBurger((prev) => {
      return prev.filter((item) => item !== clickedTopping);
    });
  };

  return (
    <div>
      <h2>Select from the menu</h2>
      {options.map((item) => (
        <button onClick={addItem} value={item} key={item}>
          {item}
        </button>
      ))}

      {burger.map((item) => (
        <div>
          {item}{" "}
          <button onClick={removeItem} value={item} key={item}>
            X
          </button>{" "}
        </div>
      ))}
    </div>
  );
}
