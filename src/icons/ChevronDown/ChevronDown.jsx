/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ChevronDown = ({ className }) => {
  return (
    <svg
      className={`chevron-down ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask className="mask" height="24" id="mask0_151_832" maskUnits="userSpaceOnUse" width="24" x="0" y="0">
        <rect className="rect" fill="#D9D9D9" height="24" width="24" />
      </mask>
      <g className="g" mask="url(#mask0_151_832)">
        <path
          className="path"
          d="M11.3463 13.5992L15.9463 8.99922L17.0001 10.053L11.3463 15.7069L5.69243 10.053L6.74626 8.99922L11.3463 13.5992Z"
          fill="black"
        />
      </g>
    </svg>
  );
};
