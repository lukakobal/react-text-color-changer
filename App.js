import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("black");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="container">
      <h1 style={{ color: color }}>React Text Color Changer</h1>
      <p style={{ color: color }}>
        {" "}
        Spremeni barvo tega besedila z gumbi ali izbiro spodaj 🎨
      </p>
      <div className="buttons">
        <button onClick={() => changeColor("red")}>Rdeča</button>
        <button onClick={() => changeColor("blue")}>Modra</button>
        <button onClick={() => changeColor("green")}>Zelena</button>
      </div>

      <input
        type="color"
        value={color}
        onChange={(e) => changeColor(e.target.value)}
      />
      <p className="info">Trenutna barva: {color}</p>
    </div>
  );
}
