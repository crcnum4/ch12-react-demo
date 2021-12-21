import React from "react";

const HorizontalLine = ({ style }) => {
  return (
    <div
      style={{
        height: 1,
        backgroundColor: "#111111",
        width: "100%",
        ...style,
      }}
    ></div>
  );
};

export default HorizontalLine;
