import React from "react";

const Select = (props) => {
  return (
    <select
      style={{ ...styles.select, ...props.style }}
      id={props.id}
      onChange={props.onChange}
      value={props.value}
    >
      {props.placeholder ? (
        <option value="" disabled>
          {props.placeholder}
        </option>
      ) : null}
      {props.children}
    </select>
  );
};

const styles = {
  select: {
    color: "#000",
    backgroundColor: "#eee",
    fontSize: 18,
    border: "1px solid #d9d9d9",
    paddingRight: 5,
    paddingLeft: 10,
    // padding: "5px 5px 5px 10px",
    width: "100%",
    minWidth: 250,
    height: "auto",
    // height: 42,
    margin: 0,
    borderRadius: 5,
    flex: 1,
  },
};

export default Select;
