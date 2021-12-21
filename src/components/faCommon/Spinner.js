import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = ({ spin, style }) => {
  return (
    <FontAwesomeIcon
      icon={["fas", "spinner"]}
      spin
      style={{ fontSize: 20, margin: "0 auto", ...style }}
    />
  );
};

export default Spinner;
