/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Graph5 = ({ color = "#DA0E29", className }) => {
  return (
    <svg
      className={`graph-5 ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 55 36"
      width="55"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M10.7 24.2391L1.5 35H47.5V5L25.42 27.5L10.7 24.2391Z" fill={color} stroke={color} />
    </svg>
  );
};

Graph5.propTypes = {
  color: PropTypes.string,
};
