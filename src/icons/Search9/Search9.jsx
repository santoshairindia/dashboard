/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Search9 = ({ color = "#DA0E29", className }) => {
  return (
    <svg
      className={`search-9 ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.74579 14.8593C12.5072 14.8593 14.7458 12.6207 14.7458 9.85929C14.7458 7.09787 12.5072 4.85929 9.74579 4.85929C6.98437 4.85929 4.74579 7.09787 4.74579 9.85929C4.74579 12.6207 6.98437 14.8593 9.74579 14.8593Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        className="path"
        d="M15.9958 16.1093L13.4958 13.6093"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
};

Search9.propTypes = {
  color: PropTypes.string,
};
