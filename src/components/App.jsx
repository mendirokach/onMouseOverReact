import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  const buttonStyle = {
    backgroundColor: color
  };

  function changeColor() {
    setColor("black");
  }

  function handleOnMouseOut() {
    setColor("white");
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={changeColor}
        onMouseOut={handleOnMouseOut}
        style={buttonStyle}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
