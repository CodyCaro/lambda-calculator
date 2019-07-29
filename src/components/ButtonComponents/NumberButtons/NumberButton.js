import React from "react";
import "./NumberButtons.scss";

const NumberButton = props => {
  return (
    <button className={props.number === "0" ? "zero" : "number-buttons"}>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        props.number
      }
    </button>
  );
};

export default NumberButton;
