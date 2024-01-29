// ButtonComponent.jsx
import React from "react";

const ButtonComponent = (props) => {
  return (
    <button
      style={{
        marginTop: "5px",
        marginBottom: "30px ",
        border: "none",
        borderRadius: "10px",
        color: "white",
        backgroundColor: "green",
        cursor: "pointer",
      }}
    >
      {props.text}
    </button>
  );
};

export default ButtonComponent;
