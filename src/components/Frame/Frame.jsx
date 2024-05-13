/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Graph7 } from "../../icons/Graph7";
import "./style.css";

export const Frame = ({
  property1,
  className,
  text = "Page view",
  text1 = "2M",
  polygon = "https://c.animaapp.com/UUPXAe3j/img/polygon-1.svg",
  groupClassName,
  text2 = "40%",
  img = "https://c.animaapp.com/UUPXAe3j/img/polygon-1-1.svg",
  icon = <Graph7 className="graph" />,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div className={`frame ${className}`}>
      <div className="div">
        <div className="page-view">{text}</div>
        <div className="div-2">
          <div className="frame-wrapper">
            <div className="element-wrapper">
              <div className={`element ${property1} ${divClassName}`}>{text1}</div>
            </div>
          </div>
          <div className="div-3">
            <img className="polygon" alt="Polygon" src={property1 === "dip" ? img : polygon} />
            <div className={`group ${groupClassName}`}>
              <div className="div-wrapper">
                <div className={`text-wrapper property-1-${property1} ${divClassNameOverride}`}>{text2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {icon}
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["rise", "dip"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  polygon: PropTypes.string,
  text2: PropTypes.string,
  img: PropTypes.string,
};
