import React, { Fragment } from "react";

const InlineInputContainer = (props) => {
  return (
    <Fragment>
      <div style={{ ...styles.inlineContainer, ...props.style }}>
        {props.children}
      </div>
      {props.error ? <p style={styles.error}>{props.error}</p> : null}
    </Fragment>
  );
};

const styles = {
  inlineContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minWidth: 400,
    borderRadius: 5,
    overflow: "hidden",
    flexWrap: "wrap",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 3,
    paddingLeft: 5,
    margin: "0px 0px 2px 0px",
  },
};

export default InlineInputContainer;
