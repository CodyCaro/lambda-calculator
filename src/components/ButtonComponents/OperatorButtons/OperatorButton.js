import React from "react";

const OperatorButton = props => {
  return (
    <button className="operator-buttons">
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        (props.operatorChar, props.operatorValue)
      }
    </button>
  );
};

export default OperatorButton;
