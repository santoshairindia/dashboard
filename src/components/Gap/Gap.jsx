/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Gap = ({ state, className, overlapClassName, text = "03.0 sec" }) => {
  return (
    <div className={`gap ${className}`}>
      <div className={`group-wrapper ${overlapClassName}`}>
        <div className="group-3">
          <div className="overlap-group-4">
            <div className="frame-9">
              <div className="frame-10">
                <img className="schedule" alt="Schedule" src="https://c.animaapp.com/UUPXAe3j/img/schedule-3@2x.png" />
                <div className="element-sec">{text}</div>
              </div>
              <div className="text-wrapper-6">Loading time</div>
            </div>
            <img className="vector" alt="Vector" src="https://c.animaapp.com/UUPXAe3j/img/vector-254-3.svg" />
            <img className="vector-2" alt="Vector" src="https://c.animaapp.com/UUPXAe3j/img/vector-254-3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Gap.propTypes = {
  state: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
};
