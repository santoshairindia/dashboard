/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DotsVertical } from "../../icons/DotsVertical";
import "./style.css";

export const BaseExtras = ({ showSeparator = true, type, className }) => {
  return (
    <div className={`base-extras ${type} ${className}`}>
      {type === "more-menu" && (
        <>
          <div className="dots-vertical-wrapper">
            <DotsVertical className="dots-vertical" />
          </div>
          <div className="rectangle-3" />
        </>
      )}

      {type === "separator" && (
        <>
          <>{showSeparator && <div className="div-5" />}</>
        </>
      )}
    </div>
  );
};

BaseExtras.propTypes = {
  showSeparator: PropTypes.bool,
  type: PropTypes.oneOf(["more-menu", "spacer", "separator"]),
};
