import React from "react";
import "../App.css";

import Button from "./Button";
const Typing = ({
  newWord,
  time,
  inputValue,
  setInputValue,
  disabled,
  handleInput,
  handleButton,
  animation,
}) => {
  return (
    <div className="typing">
      <h2 className="typingWord">{newWord}</h2>
      <span className="timer">
        <p style={{ animation: animation !== null ? animation : "" }}>{time}</p>
      </span>
      <div className="typingInput-Button">
        <input
          style={{
            width: "80%",
            border: "none",
            textIndent: ".5rem",
            background: "black",
            color: "white",
            fontSize: "1.2rem",
          }}
          type="text"
          placeholder={disabled ? "" : "start typing..."}
          disabled={disabled && disabled}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => handleInput(e)}
        />
        <Button handleButton={handleButton} disabled={disabled} />
      </div>
    </div>
  );
};
export default Typing;
