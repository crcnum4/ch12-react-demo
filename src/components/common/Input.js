import React, { Fragment } from "react";

const Input = (props) => {
  const input = (
    <input
      style={
        props.error
          ? // DR: Had to change 'style' to 'styles'.
            { ...styles.inputError, ...props.errorStyle }
          : { ...styles.input, ...props.style }
      }
      id={props.id}
      type={props.type || "text"}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required={props.required || false}
      value={props.value}
      accept={props.accept}
      multiple={props.multiple}
      disabled={props.disabled}
    />
  );
  const errorLabel = <p style={styles.error}>{props.error}</p>;
  if (props.label) {
    return (
      <div>
        <div style={styles.inputContainer}>
          <label htmlFor={props.id}>{props.label}</label>
          {input}
        </div>
        {props.error ? errorLabel : null}
      </div>
    );
  }
  return (
    <Fragment>
      {input}
      {props.error ? errorLabel : null}
    </Fragment>
  );
};

const styles = {
  input: {
    color: "#000",
    backgroundColor: "#eee",
    padding: 5,
    fontSize: 18,
    // lineHeight: 23,
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    height: "auto",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputError: {
    color: "#000",
    backgroundColor: "#eee",
    padding: 5,
    fontSize: 18,
    borderColor: "red",
    borderWidth: 2,
    width: "60%",
    height: "auto",
    flex: 1,
    marginBottom: 8,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 3,
    paddingLeft: 5,
  },
};

export default Input;
