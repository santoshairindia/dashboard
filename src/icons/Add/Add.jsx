/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Add = ({ className }) => {
  return (
    <svg
      className={`add ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask className="mask" height="24" id="mask0_87_61" maskUnits="userSpaceOnUse" width="24" x="0" y="0">
        <rect className="rect" fill="#D9D9D9" height="24" width="24" />
      </mask>
      <g className="g" mask="url(#mask0_87_61)">
        <path className="path" d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="#1C1B1F" />
      </g>
    </svg>
  );
};
