/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Arrow6 } from "../../icons/Arrow6";
import "./style.css";

export const RatesComponent = ({
  property1,
  className,
  text = "Display <br/>click rate",
  text1 = "29%",
  polygon = "https://c.animaapp.com/UUPXAe3j/img/polygon-10-6.svg",
  divClassName,
  text2 = "2.0 M",
}) => {
  return (
    <div className={`rates-component ${className}`}>
      <div className="frame-5">
        <div className={`element-m property-1-0-${property1} ${divClassName}`}>{text2}</div>
        <div className="display-click-rate">{text}</div>
      </div>
      <div className="frame-5">
        <div className="frame-6">
          {property1 === "dip" && <img className="polygon-2" alt="Polygon" src={polygon} />}

          {property1 === "rise" && <Arrow6 className="arrow" />}

          <div className={`element-2 property-1-1-${property1}`}>{text1}</div>
        </div>
        <div className="text-wrapper-4">vs last day</div>
      </div>
    </div>
  );
};

RatesComponent.propTypes = {
  property1: PropTypes.oneOf(["rise", "dip"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  polygon: PropTypes.string,
  text2: PropTypes.string,
};
