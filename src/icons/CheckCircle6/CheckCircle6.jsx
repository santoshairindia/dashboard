/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CheckCircle6 = ({ color = "#DA0E29", className }) => {
  return (
    <svg
      className={`check-circle-6 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_618_7399)">
        <path
          className="path"
          d="M9.9974 1.6665C5.3974 1.6665 1.66406 5.39984 1.66406 9.99984C1.66406 14.5998 5.3974 18.3332 9.9974 18.3332C14.5974 18.3332 18.3307 14.5998 18.3307 9.99984C18.3307 5.39984 14.5974 1.6665 9.9974 1.6665ZM8.33073 14.1665L4.16406 9.99984L5.33906 8.82484L8.33073 11.8082L14.6557 5.48317L15.8307 6.6665L8.33073 14.1665Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_618_7399">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

CheckCircle6.propTypes = {
  color: PropTypes.string,
};
