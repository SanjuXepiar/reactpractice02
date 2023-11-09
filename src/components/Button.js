import React from "react";
import "../App.css";

const Button = ({ handleButton, disabled, focus }) => {
  return (
    <>
      <button style={{ width: "20%", border: "none" }} onClick={handleButton}>
        {disabled ? "Start" : "Restart"}
      </button>
    </>
  );
};
export default Button;
