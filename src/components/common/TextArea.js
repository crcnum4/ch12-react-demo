import React from "react";

const TextArea = (props) => {
  return (
    <textarea
      style={{ ...styles.textArea, ...props.style, fontFamily: "inherit" }}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      id={props.id}
    />
  );
};

const styles = {
  textArea: {
    border: "1px solid #d9d9d9",
    paddingRight: 5,
    paddingLeft: 10,
    width: "100%",
    minWidth: 250,
    margin: 0,
    minHeight: 30,
    borderRadius: 5,
    flex: 1,
    backgroundColor: "#eee",
    fontSize: 18,
  },
};

export default TextArea;
