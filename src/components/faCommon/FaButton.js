import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaButton = (props) => {
  return (
    <button
      style={{ ...myStyles.button, ...props.style }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.disabled ? (
        <FontAwesomeIcon
          icon={["fas", "spinner"]}
          spin
          style={{ fontSize: 20, margin: "0 auto" }}
        />
      ) : (
        props.children
      )}
    </button>
  );
};

const myStyles = {
  button: {
    alignSelf: "center",
    backgroundColor: "#3343f2",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 5,
    width: "50%",
    borderRadius: 10,
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
};

export default FaButton;
